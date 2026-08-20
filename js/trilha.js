const container =
  document.getElementById("trailContainer");

let usuarioLogado = null;
let usuarioEhAdmin = false;


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


  /* =========================================
     VERIFICAR SE É ADMIN
  ========================================= */

  const {
    data: profile,
    error: profileError
  } = await supabaseClient
    .from("profiles")
    .select("role")
    .eq(
      "id",
      usuarioLogado.id
    )
    .single();


  if (profileError) {

    console.error(
      "Erro ao verificar perfil:",
      profileError
    );

  }


  usuarioEhAdmin =
    profile?.role === "admin";


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
   BUSCAR ORDEM DOS MÓDULOS
========================================= */

async function buscarOrdemModulos() {

  const {
    data,
    error
  } = await supabaseClient
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
      "Erro ao buscar ordem dos módulos:",
      error
    );

    return [];

  }


  return data || [];

}


/* =========================================
   ORGANIZAR MÓDULOS
========================================= */

function organizarModulos(
  ordemBanco
) {

  /*
    Cria um mapa:

    module_id -> position
  */

  const mapaOrdem =
    new Map();


  ordemBanco.forEach(
    item => {

      mapaOrdem.set(
        Number(item.module_id),
        Number(item.position)
      );

    }
  );


  /*
    Faz uma cópia do array original
    para não alterar o data.js.
  */

  const modulos =
    [...trilhaBahiasPrime];


  /*
    Ordena usando o Supabase.

    Se algum módulo novo ainda não
    estiver na tabela module_order,
    usa modulo.ordem como fallback.
  */

  modulos.sort(
    (a, b) => {

      const ordemA =
        mapaOrdem.get(
          Number(a.id)
        ) ??
        Number(a.ordem) ??
        Number(a.id);


      const ordemB =
        mapaOrdem.get(
          Number(b.id)
        ) ??
        Number(b.ordem) ??
        Number(b.id);


      return ordemA - ordemB;

    }
  );


  return modulos;

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

  const [
    progressos,
    ordemBanco
  ] = await Promise.all([
    buscarProgressos(),
    buscarOrdemModulos()
  ]);


  const modulosOrdenados =
    organizarModulos(
      ordemBanco
    );


  container.innerHTML = "";


  let concluidos = 0;


  modulosOrdenados.forEach(
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
        ADMIN:
        pode acessar qualquer módulo.

        ALUNO:
        primeiro módulo da ordem atual
        fica liberado.

        Os demais dependem do módulo
        imediatamente anterior NA ORDEM
        definida pelo admin.
      */

      let desbloqueado = false;


      if (usuarioEhAdmin) {

        desbloqueado = true;

      }

      else if (index === 0) {

        desbloqueado = true;

      }

      else {

        const moduloAnterior =
          modulosOrdenados[
            index - 1
          ];


        desbloqueado =
          moduloConcluido(
            moduloAnterior.id,
            progressos
          );

      }


      /*
        index + 1 vira o número VISUAL
        da trilha.

        O ID real do módulo continua
        intacto no banco.
      */

      const posicaoVisual =
        index + 1;


      criarCard(
        modulo,
        desbloqueado,
        concluido,
        posicaoVisual
      );

    }
  );


  atualizarProgressoGeral(
    concluidos,
    modulosOrdenados.length
  );

}


/* =========================================
   CRIAR CARD
========================================= */

function criarCard(
  modulo,
  desbloqueado,
  concluido,
  posicaoVisual
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

  }

  else if (!desbloqueado) {

    numero = "🔒";

  }

  else {

    numero =
      posicaoVisual;

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

  }

  else if (desbloqueado) {

    botao = `
      <a
        href="modulo.html?id=${modulo.id}"
        class="module-button"
      >
        ${
          usuarioEhAdmin
            ? "Abrir módulo →"
            : "Começar módulo →"
        }
      </a>
    `;

  }

  else {

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


  container.appendChild(
    card
  );

}


/* =========================================
   PROGRESSO GERAL
========================================= */

function atualizarProgressoGeral(
  concluidos,
  total
) {

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


/* =========================================
   INICIAR
========================================= */

iniciarTrilha();