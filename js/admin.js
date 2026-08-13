let adminUser = null;


/* =========================================
   INICIAR ADMIN
========================================= */

async function iniciarAdmin() {

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();


  if (!session) {
    window.location.href = "../login.html";
    return;
  }


  adminUser = session.user;


  const {
    data: profile,
    error
  } = await supabaseClient
    .from("profiles")
    .select("role")
    .eq("id", adminUser.id)
    .single();


  if (
    error ||
    !profile ||
    profile.role !== "admin"
  ) {

    alert(
      "Esta área é exclusiva do administrador."
    );

    window.location.href =
      "../index.html";

    return;
  }


  await carregarAlunos();

  carregarModulos();

}


/* =========================================
   LISTAR ALUNOS
========================================= */

async function carregarAlunos() {

  const lista =
    document.getElementById(
      "studentsList"
    );

  const contador =
    document.getElementById(
      "studentCount"
    );


  if (lista) {
    lista.textContent =
      "Carregando alunos...";
  }


  const {
    data,
    error
  } = await supabaseClient
    .from("profiles")
    .select(
      "id, name, role, xp, level, streak"
    )
    .eq("role", "student")
    .order("xp", {
      ascending: false
    });


  if (error) {

    console.error(error);

    if (lista) {
      lista.textContent =
        "Erro ao carregar alunos.";
    }

    return;
  }


  const alunos =
    data || [];


  if (contador) {
    contador.textContent =
      alunos.length;
  }


  if (!lista) {
    return;
  }


  if (!alunos.length) {

    lista.innerHTML =
      "<p>Nenhum aluno cadastrado.</p>";

    return;
  }


  lista.innerHTML = "";


  alunos.forEach(aluno => {

    const nome =
      aluno.name || "Aluno";


    const item =
      document.createElement("div");


    item.classList.add(
      "student-admin-item"
    );


    item.innerHTML = `
      <div class="student-admin-avatar">
        ${nome.charAt(0).toUpperCase()}
      </div>

      <div class="student-admin-info">
        <strong>${nome}</strong>

        <span>
          Nível ${aluno.level || 1}
          • ${aluno.xp || 0} XP
          • 🔥 ${aluno.streak || 0}
        </span>
      </div>
    `;


    lista.appendChild(item);

  });

}


/* =========================================
   CRIAR ALUNO
========================================= */

const studentForm =
  document.getElementById(
    "studentForm"
  );


if (studentForm) {

  studentForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const nome =
        document.getElementById(
          "studentName"
        ).value.trim();


      const email =
        document.getElementById(
          "studentEmail"
        ).value.trim();


      const senha =
        document.getElementById(
          "studentPassword"
        ).value;


      const message =
        document.getElementById(
          "studentMessage"
        );


      const button =
        document.getElementById(
          "createStudentButton"
        );


      button.disabled = true;

      button.textContent =
        "Criando aluno...";

      message.textContent = "";


      try {

        const {
          data,
          error
        } =
          await supabaseClient
            .functions
            .invoke(
              "create-student",
              {
                body: {
                  name: nome,
                  email: email,
                  password: senha
                }
              }
            );


        /*
          Em alguns casos a conta pode ter sido
          criada mesmo que o client tenha recebido
          uma resposta não-2xx.

          Antes de declarar falha, recarregamos
          os alunos.
        */

        if (error) {

          console.warn(
            "Resposta da função:",
            error
          );


          await carregarAlunos();


          const {
            data: encontrado
          } = await supabaseClient
            .from("profiles")
            .select("name")
            .eq("name", nome)
            .maybeSingle();


          if (!encontrado) {

            let mensagem =
              "Erro ao criar aluno.";


            if (error.context) {

              try {

                const resposta =
                  await error.context.json();

                mensagem =
                  resposta.error ||
                  mensagem;

              } catch (_) {}

            }


            throw new Error(
              mensagem
            );

          }

        }


        message.textContent =
          `✓ ${nome} foi cadastrado com sucesso.`;


        message.className =
          "admin-message success";


        studentForm.reset();


        await carregarAlunos();


      } catch (error) {

        console.error(error);


        message.textContent =
          error.message ||
          "Erro ao criar aluno.";


        message.className =
          "admin-message error";

      }


      button.disabled = false;

      button.textContent =
        "+ Criar aluno";

    }
  );

}


/* =========================================
   LISTAR MÓDULOS
========================================= */

function carregarModulos() {

  const select =
    document.getElementById(
      "videoModule"
    );


  if (!select) {
    return;
  }


  select.innerHTML = `
    <option value="">
      Selecione um módulo
    </option>
  `;


  trilhaBahiasPrime.forEach(
    modulo => {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        modulo.id;


      option.textContent =
        `${modulo.ordem}. ${modulo.titulo}`;


      select.appendChild(
        option
      );

    }
  );


  select.addEventListener(
    "change",
    carregarVideoAtual
  );

}


/* =========================================
   VIDEO EXISTENTE
========================================= */

async function carregarVideoAtual() {

  const moduleId =
    Number(
      document.getElementById(
        "videoModule"
      ).value
    );


  const campo =
    document.getElementById(
      "videoUrl"
    );


  if (!moduleId) {

    campo.value = "";

    return;
  }


  const {
    data,
    error
  } = await supabaseClient
    .from("module_videos")
    .select("video_url")
    .eq("module_id", moduleId)
    .maybeSingle();


  if (error) {

    console.error(
      "Erro ao buscar vídeo:",
      error
    );

    return;
  }


  campo.value =
    data?.video_url || "";

}


/* =========================================
   SALVAR VIDEOAULA
========================================= */

const saveVideoButton =
  document.getElementById(
    "saveVideoButton"
  );


if (saveVideoButton) {

  saveVideoButton.addEventListener(
    "click",
    async () => {

      const moduleId =
        Number(
          document.getElementById(
            "videoModule"
          ).value
        );


      const url =
        document.getElementById(
          "videoUrl"
        ).value.trim();


      const message =
        document.getElementById(
          "videoMessage"
        );


      if (!moduleId) {

        message.textContent =
          "Selecione um módulo.";

        message.className =
          "admin-message error";

        return;
      }


      if (!url) {

        message.textContent =
          "Cole o link da videoaula.";

        message.className =
          "admin-message error";

        return;
      }


      try {

        new URL(url);

      } catch {

        message.textContent =
          "Informe uma URL válida.";

        message.className =
          "admin-message error";

        return;
      }


      saveVideoButton.disabled = true;

      saveVideoButton.textContent =
        "Salvando...";


      const {
        error
      } = await supabaseClient
        .from("module_videos")
        .upsert(
          {
            module_id:
              moduleId,

            video_url:
              url,

            updated_at:
              new Date().toISOString()
          },
          {
            onConflict:
              "module_id"
          }
        );


      if (error) {

        console.error(
          "Erro ao salvar vídeo:",
          error
        );


        message.textContent =
          "Não foi possível salvar a videoaula.";

        message.className =
          "admin-message error";


      } else {

        message.textContent =
          "✓ Videoaula salva com sucesso.";

        message.className =
          "admin-message success";

      }


      saveVideoButton.disabled = false;

      saveVideoButton.textContent =
        "Salvar videoaula";

    }
  );

}


/* =========================================
   INICIAR
========================================= */

iniciarAdmin();