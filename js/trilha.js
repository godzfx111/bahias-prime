const container =
  document.getElementById("trailContainer");

let usuarioLogado = null;


/* =========================================
   INICIAR TRILHA
========================================= */

async function iniciarTrilha() {

  const {
    data: { session },
    error
  } = await supabaseClient.auth.getSession();


  if (error) {
    console.error(
      "Erro ao verificar sessão:",
      error
    );
  }


  if (!session) {

    window.location.href =
      "../login.html";

    return;

  }


  usuarioLogado =
    session.user;


  await montarTrilha();

}


/* =========================================
   BUSCAR PROGRESSO
========================================= */

async function buscarProgressos() {

  const {
    data,
    error
  } = await supabaseClient
    .from("progress")
    .select(
      "module_id, teoria, video, exercicios"
    )
    .eq(
      "user_id",
      usuarioLogado.id
    );


  if (error) {

    console.error(
      "Erro ao buscar progresso:",
      error
    );

    return [];

  }


  return data || [];

}


/* =========================================
   VERIFICAR SE MÓDULO FOI CONCLUÍDO
========================================= */

function moduloConcluido(
  moduleId,
  progressos
) {

  const progresso =
    progressos.find(
      item =>
        Number(item.module_id) ===
        Number(moduleId)
    );


  if (!progresso) {
    return false;
  }


  return (
    progresso.teoria === true &&
    progresso.video === true &&
    progresso.exercicios === true
  );

}


/* =========================================
   MONTAR TRILHA
========================================= */

async function montarTrilha() {

  const progressos =
    await buscarProgressos();


  container.innerHTML = "";


  let concluidos = 0;


  trilhaBahiasPrime.forEach(
    (modulo, index) => {

      const concluido =
        moduloConcluido(
          modulo.id,
          progressos
        );


      if (concluido) {
        concluidos++;
      }


      /*
        O PRIMEIRO MÓDULO
        SEMPRE FICA DISPONÍVEL.

        Os outros só liberam
        se o anterior estiver completo.
      */

      let desbloqueado = false;


      if (index === 0) {

        desbloqueado = true;

      } else {

        const moduloAnterior =
          trilhaBahiasPrime[
            index - 1
          ];


        desbloqueado =
          moduloConcluido(
            moduloAnterior.id,
            progressos
          );

      }


      criarCard(
        modulo,
        desbloqueado,
        concluido
      );

    }
  );


  atualizarProgressoGeral(
    concluidos
  );

}


/* =========================================
   CRIAR CARD
========================================= */

function criarCard(
  modulo,
  desbloqueado,
  concluido
) {

  const card =
    document.createElement(
      "div"
    );


  card.classList.add(
    "trail-module"
  );


  if (!desbloqueado) {
    card.classList.add(
      "locked"
    );
  }


  if (concluido) {
    card.classList.add(
      "completed"
    );
  }


  let numero;


  if (concluido) {

    numero = "✓";

  } else if (
    !desbloqueado
  ) {

    numero = "🔒";

  } else {

    numero =
      modulo.ordem;

  }


  let botao;


  if (concluido) {

    botao = `
      <a
        href="modulo.html?id=${modulo.id}"
        class="module-button"
      >
        Revisar módulo →
      </a>
    `;

  } else if (
    desbloqueado
  ) {

    botao = `
      <a
        href="modulo.html?id=${modulo.id}"
        class="module-button"
      >
        Começar módulo →
      </a>
    `;

  } else {

    botao = `
      <span class="locked-text">
        Complete o módulo anterior
      </span>
    `;

  }


  card.innerHTML = `

    <div class="trail-number">
      ${numero}
    </div>


    <div class="trail-module-content">

      <div class="trail-module-top">

        <span class="subject-tag">
          ${modulo.area}
        </span>

        <span class="difficulty-tag">
          ${modulo.dificuldade}
        </span>

        ${
          concluido
            ? `
              <span class="completed-tag">
                CONCLUÍDO
              </span>
            `
            : ""
        }

      </div>


      <h3>
        ${modulo.titulo}
      </h3>


      <p>
        ${modulo.descricao}
      </p>


      <div class="module-footer">

        <span>
          ⭐ ${modulo.xp} XP
        </span>

        ${botao}

      </div>

    </div>

  `;


  container.appendChild(card);

}


/* =========================================
   PROGRESSO GERAL
========================================= */

function atualizarProgressoGeral(
  concluidos
) {

  const total =
    trilhaBahiasPrime.length;


  const percentual =
    total > 0
      ? Math.round(
          (
            concluidos /
            total
          ) * 100
        )
      : 0;


  const totalElement =
    document.getElementById(
      "totalModulos"
    );


  const concluidosElement =
    document.getElementById(
      "modulosConcluidos"
    );


  const porcentagem =
    document.getElementById(
      "porcentagemTrilha"
    );


  const barra =
    document.getElementById(
      "progressoTrilha"
    );


  if (totalElement) {
    totalElement.textContent =
      total;
  }


  if (concluidosElement) {
    concluidosElement.textContent =
      concluidos;
  }


  if (porcentagem) {
    porcentagem.textContent =
      `${percentual}%`;
  }


  if (barra) {
    barra.style.width =
      `${percentual}%`;
  }

}


iniciarTrilha();