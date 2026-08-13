console.log("Bahia's Prime iniciado.");


/* =========================================
   CARREGAR DATA.JS
========================================= */

function carregarDataJs() {

  return new Promise((resolve, reject) => {

    if (
      typeof trilhaBahiasPrime !==
      "undefined"
    ) {
      resolve();
      return;
    }


    const script =
      document.createElement("script");

    script.src =
      "js/data.js";

    script.onload =
      () => resolve();

    script.onerror =
      () =>
        reject(
          new Error(
            "Não foi possível carregar os módulos."
          )
        );


    document.head.appendChild(
      script
    );

  });

}


/* =========================================
   INICIAR DASHBOARD
========================================= */

async function iniciarDashboard() {

  try {

    await carregarDataJs();


    const {
      data: { session },
      error: sessionError
    } =
      await supabaseClient
        .auth
        .getSession();


    if (
      sessionError ||
      !session
    ) {

      window.location.href =
        "login.html";

      return;

    }


    const user =
      session.user;


    await carregarPerfilDashboard(
      user
    );


    await carregarTrilhaDashboard(
      user
    );


  } catch (error) {

    console.error(
      "Erro ao iniciar dashboard:",
      error
    );

  }

}


/* =========================================
   PERFIL DO USUÁRIO
========================================= */

async function carregarPerfilDashboard(
  user
) {

  const {
    data: profile,
    error
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "name, role, xp, level, streak"
      )
      .eq(
        "id",
        user.id
      )
      .single();


  if (error) {

    console.error(
      "Erro ao carregar perfil:",
      error
    );

  }


  const nome =
    profile?.name ||
    user.email?.split("@")[0] ||
    "Aluno";


  const role =
    profile?.role === "admin"
      ? "Administrador"
      : "Aluno";


  const xp =
    Number(
      profile?.xp || 0
    );


  const level =
    Number(
      profile?.level || 1
    );


  const streak =
    Number(
      profile?.streak || 0
    );


  /* NOME NO TOPO */

  const topName =
    document.querySelector(
      ".topbar h2"
    );

  if (topName) {

    topName.textContent =
      `${nome} 👋`;

  }


  /* MINI PERFIL */

  const miniAvatar =
    document.querySelector(
      ".mini-profile .avatar"
    );


  const miniName =
    document.querySelector(
      ".mini-profile strong"
    );


  const miniRole =
    document.querySelector(
      ".mini-profile span"
    );


  if (miniAvatar) {

    miniAvatar.textContent =
      nome
        .charAt(0)
        .toUpperCase();

  }


  if (miniName) {

    miniName.textContent =
      nome;

  }


  if (miniRole) {

    miniRole.textContent =
      role;

  }


  /* STREAK */

  const streakStrong =
    document.querySelector(
      ".streak strong"
    );


  if (streakStrong) {

    streakStrong.textContent =
      `${streak} ${
        streak === 1
          ? "dia"
          : "dias"
      }`;

  }


  /* NÍVEL */

  const levelText =
    document.querySelector(
      ".xp-box > span"
    );


  if (levelText) {

    levelText.textContent =
      `Nível ${level}`;

  }


  /*
    Cada nível considera
    uma faixa de 500 XP.
  */

  const xpNoNivel =
    xp % 500;


  const xpPercentual =
    Math.min(
      100,
      Math.round(
        (
          xpNoNivel /
          500
        ) * 100
      )
    );


  const xpProgress =
    document.querySelector(
      ".xp-progress"
    );


  if (xpProgress) {

    xpProgress.style.width =
      `${xpPercentual}%`;

  }


  const xpSmall =
    document.querySelector(
      ".xp-box small"
    );


  if (xpSmall) {

    xpSmall.textContent =
      `${xpNoNivel} / 500 XP`;

  }


  /* XP TOTAL */

  const statsValues =
    document.querySelectorAll(
      ".stats strong"
    );


  if (
    statsValues.length >= 1
  ) {

    statsValues[0].textContent =
      xp;

  }

}


/* =========================================
   PROGRESSO DA TRILHA
========================================= */

async function carregarTrilhaDashboard(
  user
) {

  const {
    data: progressos,
    error
  } =
    await supabaseClient
      .from("progress")
      .select(
        "module_id, teoria, video, exercicios"
      )
      .eq(
        "user_id",
        user.id
      );


  if (error) {

    console.error(
      "Erro ao buscar progresso:",
      error
    );

    return;

  }


  const listaProgressos =
    progressos || [];


/* =========================================
   FUNÇÃO AUXILIAR
========================================= */

  function buscarProgresso(
    moduleId
  ) {

    return (
      listaProgressos.find(
        item =>
          Number(
            item.module_id
          ) ===
          Number(
            moduleId
          )
      ) || null
    );

  }


  function moduloConcluido(
    moduleId
  ) {

    const progresso =
      buscarProgresso(
        moduleId
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
   DESCOBRIR MÓDULO ATUAL
========================================= */

  let moduloAtual =
    trilhaBahiasPrime.find(
      modulo =>
        !moduloConcluido(
          modulo.id
        )
    );


  const terminouTudo =
    !moduloAtual;


  if (terminouTudo) {

    moduloAtual =
      trilhaBahiasPrime[
        trilhaBahiasPrime.length - 1
      ];

  }


  if (!moduloAtual) {

    console.error(
      "Nenhum módulo encontrado."
    );

    return;

  }


/* =========================================
   PROGRESSO DO MÓDULO ATUAL
========================================= */

  const progressoAtual =
    buscarProgresso(
      moduloAtual.id
    );


  let etapasConcluidas =
    0;


  if (
    progressoAtual?.teoria
  ) {

    etapasConcluidas++;

  }


  if (
    progressoAtual?.video
  ) {

    etapasConcluidas++;

  }


  if (
    progressoAtual?.exercicios
  ) {

    etapasConcluidas++;

  }


  let percentual =
    Math.round(
      (
        etapasConcluidas /
        3
      ) * 100
    );


  if (terminouTudo) {

    percentual = 100;

  }


/* =========================================
   ATUALIZAR CARD PRINCIPAL
========================================= */

  const heroTitle =
    document.querySelector(
      ".hero-card h3"
    );


  const heroDescription =
    document.querySelector(
      ".hero-card .hero-content > p"
    );


  const moduleNumber =
    document.querySelector(
      ".level-circle strong"
    );


  if (heroTitle) {

    heroTitle.textContent =
      terminouTudo
        ? "Trilha concluída"
        : moduloAtual.titulo;

  }


  if (heroDescription) {

    heroDescription.textContent =
      terminouTudo
        ? "Você concluiu todos os módulos disponíveis. Continue revisando enquanto novos conteúdos são adicionados."
        : moduloAtual.descricao;

  }


  if (moduleNumber) {

    moduleNumber.textContent =
      String(
        moduloAtual.ordem
      ).padStart(
        2,
        "0"
      );

  }


/* =========================================
   BARRA DO MÓDULO
========================================= */

  const progressText =
    document.getElementById(
      "dashboardModuleProgressText"
    );


  const progressBar =
    document.getElementById(
      "dashboardModuleProgressBar"
    );


  if (progressText) {

    progressText.textContent =
      `${percentual}%`;

  }


  if (progressBar) {

    progressBar.style.width =
      `${percentual}%`;

  }


/* =========================================
   MISSÃO — AULA PRINCIPAL
========================================= */

  const taskSubtitle =
    document.querySelector(
      ".task-list .task:first-child .task-info span"
    );


  if (taskSubtitle) {

    taskSubtitle.textContent =
      terminouTudo
        ? "Revisão da trilha"
        : moduloAtual.titulo;

  }


/* =========================================
   BOTÃO
========================================= */

  const continueButton =
    document.querySelector(
      ".hero-card .primary-button"
    );


  if (continueButton) {

    if (terminouTudo) {

      continueButton.innerHTML =
        `
          Revisar trilha
          <span>→</span>
        `;

    } else {

      continueButton.innerHTML =
        `
          Continuar estudando
          <span>→</span>
        `;

    }

  }


/* =========================================
   LOG
========================================= */

  console.log(
    "Módulo atual:",
    moduloAtual.titulo,
    "| Progresso:",
    percentual + "%"
  );

}


/* =========================================
   INICIAR
========================================= */

iniciarDashboard();