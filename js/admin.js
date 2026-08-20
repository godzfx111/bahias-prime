let adminUser = null;

let modulosAdminOrdenados =
  [...trilhaBahiasPrime];

let itemArrastado = null;


/* =========================================
   INICIAR ADMIN
========================================= */

async function iniciarAdmin() {

  const {
    data: { session }
  } =
    await supabaseClient
      .auth
      .getSession();


  if (!session) {

    window.location.href =
      "../login.html";

    return;

  }


  adminUser =
    session.user;


  const {
    data: profile,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select("role")
      .eq(
        "id",
        adminUser.id
      )
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


  /*
    IMPORTANTE:
    Sempre que o Admin abrir,
    verifica se existem módulos novos
    no data.js ainda não cadastrados
    na tabela module_order.
  */

  await sincronizarModulosComOrdem();

  await carregarOrganizacaoTrilha();

  await carregarAlunos();

  carregarModulos();

}


/* =========================================
   SINCRONIZAR MÓDULOS NOVOS
========================================= */

async function sincronizarModulosComOrdem() {

  const {
    data: ordemAtual,
    error
  } =
    await supabaseClient
      .from("module_order")
      .select(
        "module_id, position"
      )
      .order(
        "position",
        {
          ascending: true
        }
      );


  if (error) {

    console.error(
      "Erro ao verificar módulos cadastrados:",
      error
    );

    return;

  }


  /*
    IDs que já existem
    no module_order.
  */

  const cadastrados =
    new Set(
      (ordemAtual || [])
        .map(
          item =>
            Number(
              item.module_id
            )
        )
    );


  /*
    Procura módulos que existem
    no data.js, mas ainda não
    existem no banco.
  */

  const modulosNovos =
    trilhaBahiasPrime.filter(
      modulo =>
        !cadastrados.has(
          Number(
            modulo.id
          )
        )
    );


  /*
    Nenhum módulo novo.
  */

  if (!modulosNovos.length) {
    return;
  }


  /*
    Descobre qual será
    a próxima posição.
  */

  let proximaPosicao =
    1;


  if (
    ordemAtual &&
    ordemAtual.length
  ) {

    const maiorPosicao =
      Math.max(
        ...ordemAtual.map(
          item =>
            Number(
              item.position
            )
        )
      );


    proximaPosicao =
      maiorPosicao + 1;

  }


  /*
    Cadastra cada módulo novo
    automaticamente no final.
  */

  for (
    const modulo
    of modulosNovos
  ) {

    const {
      error: insertError
    } =
      await supabaseClient
        .from("module_order")
        .insert({

          module_id:
            modulo.id,

          position:
            proximaPosicao,

          updated_at:
            new Date()
              .toISOString()

        });


    if (insertError) {

      console.error(
        `Erro ao cadastrar automaticamente o módulo ${modulo.id}:`,
        insertError
      );

      continue;

    }


    proximaPosicao++;

  }

}


/* =========================================
   BUSCAR ORDEM DA TRILHA
========================================= */

async function carregarOrganizacaoTrilha() {

  const lista =
    document.getElementById(
      "moduleOrderList"
    );


  if (lista) {

    lista.textContent =
      "Carregando módulos...";

  }


  const {
    data,
    error
  } =
    await supabaseClient
      .from("module_order")
      .select(
        "module_id, position"
      )
      .order(
        "position",
        {
          ascending: true
        }
      );


  if (error) {

    console.error(
      "Erro ao buscar ordem:",
      error
    );


    modulosAdminOrdenados =
      [...trilhaBahiasPrime];


  } else {

    const mapa =
      new Map();


    (data || []).forEach(
      item => {

        mapa.set(
          Number(
            item.module_id
          ),
          Number(
            item.position
          )
        );

      }
    );


    modulosAdminOrdenados =
      [...trilhaBahiasPrime]
        .sort(
          (a, b) => {

            const ordemA =
              mapa.get(
                Number(
                  a.id
                )
              ) ??
              Number(
                a.ordem
              ) ??
              Number(
                a.id
              );


            const ordemB =
              mapa.get(
                Number(
                  b.id
                )
              ) ??
              Number(
                b.ordem
              ) ??
              Number(
                b.id
              );


            return ordemA - ordemB;

          }
        );

  }


  renderizarListaOrdenavel();

}


/* =========================================
   RENDERIZAR LISTA ARRASTÁVEL
========================================= */

function renderizarListaOrdenavel() {

  const lista =
    document.getElementById(
      "moduleOrderList"
    );


  if (!lista) {
    return;
  }


  lista.innerHTML =
    "";


  modulosAdminOrdenados.forEach(
    (modulo, index) => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "module-order-item";


      item.draggable =
        true;


      item.dataset.moduleId =
        modulo.id;


      item.innerHTML = `

        <div class="module-drag-handle">
          ☰
        </div>


        <div class="module-order-position">
          ${index + 1}
        </div>


        <div class="module-order-info">

          <strong>
            ${modulo.titulo}
          </strong>

          <span>
            ${modulo.area}
            • ID ${modulo.id}
          </span>

        </div>

      `;


      /* =========================
         COMEÇOU A ARRASTAR
      ========================== */

      item.addEventListener(
        "dragstart",
        () => {

          itemArrastado =
            item;


          item.classList.add(
            "dragging"
          );

        }
      );


      /* =========================
         TERMINOU DE ARRASTAR
      ========================== */

      item.addEventListener(
        "dragend",
        () => {

          item.classList.remove(
            "dragging"
          );


          itemArrastado =
            null;


          atualizarNumeracaoVisual();

        }
      );


      /* =========================
         PASSOU SOBRE OUTRO ITEM
      ========================== */

      item.addEventListener(
        "dragover",
        event => {

          event.preventDefault();


          if (
            !itemArrastado ||
            itemArrastado === item
          ) {
            return;
          }


          const rect =
            item.getBoundingClientRect();


          const metade =
            rect.top +
            rect.height / 2;


          if (
            event.clientY <
            metade
          ) {

            lista.insertBefore(
              itemArrastado,
              item
            );

          } else {

            lista.insertBefore(
              itemArrastado,
              item.nextSibling
            );

          }

        }
      );


      lista.appendChild(
        item
      );

    }
  );

}


/* =========================================
   ATUALIZAR NÚMEROS VISUAIS
========================================= */

function atualizarNumeracaoVisual() {

  const itens =
    document.querySelectorAll(
      ".module-order-item"
    );


  itens.forEach(
    (item, index) => {

      const numero =
        item.querySelector(
          ".module-order-position"
        );


      if (numero) {

        numero.textContent =
          index + 1;

      }

    }
  );

}


/* =========================================
   SALVAR ORDEM
========================================= */

const saveModuleOrderButton =
  document.getElementById(
    "saveModuleOrderButton"
  );


if (saveModuleOrderButton) {

  saveModuleOrderButton.addEventListener(
    "click",
    salvarNovaOrdem
  );

}


async function salvarNovaOrdem() {

  const button =
    document.getElementById(
      "saveModuleOrderButton"
    );


  const message =
    document.getElementById(
      "moduleOrderMessage"
    );


  const itens =
    [
      ...document.querySelectorAll(
        ".module-order-item"
      )
    ];


  if (!itens.length) {
    return;
  }


  button.disabled =
    true;


  button.textContent =
    "Salvando ordem...";


  message.textContent =
    "";


  message.className =
    "admin-message";


  try {

    /*
      Primeiro joga temporariamente
      os módulos para posições altas.

      Isso evita conflito com:
      UNIQUE(position)
    */

    for (
      let index = 0;
      index < itens.length;
      index++
    ) {

      const moduleId =
        Number(
          itens[index]
            .dataset
            .moduleId
        );


      const {
        error
      } =
        await supabaseClient
          .from("module_order")
          .upsert(
            {

              module_id:
                moduleId,

              position:
                1000 + index,

              updated_at:
                new Date()
                  .toISOString()

            },
            {
              onConflict:
                "module_id"
            }
          );


      if (error) {
        throw error;
      }

    }


    /*
      Agora grava as posições
      definitivas:
      1, 2, 3, 4...
    */

    for (
      let index = 0;
      index < itens.length;
      index++
    ) {

      const moduleId =
        Number(
          itens[index]
            .dataset
            .moduleId
        );


      const {
        error
      } =
        await supabaseClient
          .from("module_order")
          .update(
            {

              position:
                index + 1,

              updated_at:
                new Date()
                  .toISOString()

            }
          )
          .eq(
            "module_id",
            moduleId
          );


      if (error) {
        throw error;
      }

    }


    message.textContent =
      "✓ Nova ordem salva com sucesso.";


    message.className =
      "admin-message success";


    await carregarOrganizacaoTrilha();


    /*
      Atualiza também
      o select das videoaulas.
    */

    carregarModulos();


  } catch (error) {

    console.error(
      "Erro ao salvar ordem:",
      error
    );


    message.textContent =
      "Não foi possível salvar a nova ordem.";


    message.className =
      "admin-message error";

  }


  button.disabled =
    false;


  button.textContent =
    "Salvar nova ordem";

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
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "id, name, role, xp, level, streak"
      )
      .eq(
        "role",
        "student"
      )
      .order(
        "xp",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      error
    );


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


  lista.innerHTML =
    "";


  alunos.forEach(
    aluno => {

      const nome =
        aluno.name ||
        "Aluno";


      const item =
        document.createElement(
          "div"
        );


      item.classList.add(
        "student-admin-item"
      );


      item.innerHTML = `

        <div class="student-admin-avatar">
          ${nome.charAt(0).toUpperCase()}
        </div>

        <div class="student-admin-info">

          <strong>
            ${nome}
          </strong>

          <span>
            Nível ${aluno.level || 1}
            • ${aluno.xp || 0} XP
            • 🔥 ${aluno.streak || 0}
          </span>

        </div>

      `;


      lista.appendChild(
        item
      );

    }
  );

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
        )
        .value
        .trim();


      const email =
        document.getElementById(
          "studentEmail"
        )
        .value
        .trim();


      const senha =
        document.getElementById(
          "studentPassword"
        )
        .value;


      const message =
        document.getElementById(
          "studentMessage"
        );


      const button =
        document.getElementById(
          "createStudentButton"
        );


      button.disabled =
        true;


      button.textContent =
        "Criando aluno...";


      message.textContent =
        "";


      try {

        const {
          error
        } =
          await supabaseClient
            .functions
            .invoke(
              "create-student",
              {
                body: {

                  name:
                    nome,

                  email:
                    email,

                  password:
                    senha

                }
              }
            );


        if (error) {

          console.warn(
            "Resposta da função:",
            error
          );


          await carregarAlunos();


          const {
            data: encontrado
          } =
            await supabaseClient
              .from("profiles")
              .select("name")
              .eq(
                "name",
                nome
              )
              .maybeSingle();


          if (!encontrado) {

            let mensagem =
              "Erro ao criar aluno.";


            if (
              error.context
            ) {

              try {

                const resposta =
                  await error
                    .context
                    .json();


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

        console.error(
          error
        );


        message.textContent =
          error.message ||
          "Erro ao criar aluno.";


        message.className =
          "admin-message error";

      }


      button.disabled =
        false;


      button.textContent =
        "+ Criar aluno";

    }
  );

}


/* =========================================
   LISTAR MÓDULOS PARA VIDEOAULA
========================================= */

function carregarModulos() {

  const select =
    document.getElementById(
      "videoModule"
    );


  if (!select) {
    return;
  }


  const valorAtual =
    select.value;


  select.innerHTML = `

    <option value="">
      Selecione um módulo
    </option>

  `;


  modulosAdminOrdenados.forEach(
    (modulo, index) => {

      const option =
        document.createElement(
          "option"
        );


      option.value =
        modulo.id;


      option.textContent =
        `${index + 1}. ${modulo.titulo}`;


      select.appendChild(
        option
      );

    }
  );


  if (valorAtual) {

    select.value =
      valorAtual;

  }


  select.onchange =
    carregarVideoAtual;

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

    campo.value =
      "";

    return;

  }


  const {
    data,
    error
  } =
    await supabaseClient
      .from("module_videos")
      .select(
        "video_url"
      )
      .eq(
        "module_id",
        moduleId
      )
      .maybeSingle();


  if (error) {

    console.error(
      "Erro ao buscar vídeo:",
      error
    );

    return;

  }


  campo.value =
    data?.video_url ||
    "";

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
        )
        .value
        .trim();


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

        new URL(
          url
        );


      } catch {

        message.textContent =
          "Informe uma URL válida.";


        message.className =
          "admin-message error";


        return;

      }


      saveVideoButton.disabled =
        true;


      saveVideoButton.textContent =
        "Salvando...";


      const {
        error
      } =
        await supabaseClient
          .from("module_videos")
          .upsert(
            {

              module_id:
                moduleId,

              video_url:
                url,

              updated_at:
                new Date()
                  .toISOString()

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


      saveVideoButton.disabled =
        false;


      saveVideoButton.textContent =
        "Salvar videoaula";

    }
  );

}


/* =========================================
   INICIAR
========================================= */

iniciarAdmin();