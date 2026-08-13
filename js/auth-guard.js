/* =========================================
   BAHIA'S PRIME
   DASHBOARD + AUTENTICAÇÃO
========================================= */


/* =========================================
   INICIAR DASHBOARD
========================================= */

async function carregarUsuarioLogado() {

  const {
    data: { session },
    error: sessionError
  } = await supabaseClient.auth.getSession();


  if (sessionError) {

    console.error(
      "Erro ao verificar sessão:",
      sessionError
    );

  }


  /* SEM LOGIN = VOLTA PARA LOGIN */

  if (!session) {

    window.location.href =
      "login.html";

    return;

  }


  const user = session.user;


  /* =========================================
     BUSCAR PERFIL DO ALUNO
  ========================================= */

  const {
    data: profile,
    error: profileError
  } = await supabaseClient
    .from("profiles")
    .select(
      "name, role, xp, streak, level"
    )
    .eq("id", user.id)
    .single();


  if (profileError) {

    console.error(
      "Erro ao carregar perfil:",
      profileError
    );

    return;

  }


  /* =========================================
     BUSCAR PROGRESSO DO MÓDULO 1
  ========================================= */

  const {
    data: progressoModulo,
    error: progressError
  } = await supabaseClient
    .from("progress")
    .select(
      "teoria, video, exercicios, xp_awarded"
    )
    .eq("user_id", user.id)
    .eq("module_id", 1)
    .maybeSingle();


  if (progressError) {

    console.error(
      "Erro ao carregar progresso:",
      progressError
    );

  }


  /* =========================================
     ATUALIZAR DASHBOARD
  ========================================= */

  atualizarDashboard(
    profile,
    progressoModulo
  );


  /* =========================================
     CARREGAR TORNEIO
  ========================================= */

  await carregarTorneio();

}



/* =========================================
   ATUALIZAR INTERFACE
========================================= */

function atualizarDashboard(
  profile,
  progressoModulo
) {

  const nome =
    profile.name || "Aluno";

  const xp =
    Number(profile.xp) || 0;

  const streak =
    Number(profile.streak) || 0;

  const level =
    Number(profile.level) || 1;



  /* =========================================
     NOME
  ========================================= */

  const welcomeName =
    document.querySelector(
      ".topbar h2"
    );


  if (welcomeName) {

    welcomeName.textContent =
      `${nome} 👋`;

  }



  /* =========================================
     SIDEBAR
  ========================================= */

  const sidebarName =
    document.querySelector(
      ".mini-profile strong"
    );


  if (sidebarName) {

    sidebarName.textContent =
      nome;

  }


  const sidebarRole =
    document.querySelector(
      ".mini-profile span"
    );


  if (sidebarRole) {

    sidebarRole.textContent =
      profile.role === "admin"
        ? "Administrador"
        : "Aluno";

  }



  /* =========================================
     AVATAR
  ========================================= */

  const avatar =
    document.querySelector(
      ".avatar"
    );


  if (avatar) {

    avatar.textContent =
      nome
        .charAt(0)
        .toUpperCase();

  }



  /* =========================================
     STREAK
  ========================================= */

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



  /* =========================================
     NÍVEL
  ========================================= */

  const levelText =
    document.querySelector(
      ".xp-box > span"
    );


  if (levelText) {

    levelText.textContent =
      `Nível ${level}`;

  }



  /* =========================================
     XP
  ========================================= */

  const xpSmall =
    document.querySelector(
      ".xp-box small"
    );


  if (xpSmall) {

    /*
      Cada nível exige 500 XP.
      Depois podemos deixar essa curva
      mais sofisticada.
    */

    const xpNoNivel =
      xp % 500;


    xpSmall.textContent =
      `${xpNoNivel} / 500 XP`;

  }



  /* =========================================
     BARRA DE XP
  ========================================= */

  const xpProgress =
    document.querySelector(
      ".xp-progress"
    );


  if (xpProgress) {

    const xpNoNivel =
      xp % 500;


    const percentualXP =
      Math.min(
        (xpNoNivel / 500) * 100,
        100
      );


    xpProgress.style.width =
      `${percentualXP}%`;

  }



  /* =========================================
     ESTATÍSTICAS
  ========================================= */

  const statValues =
    document.querySelectorAll(
      ".stats strong"
    );


  /*
    0 = XP
    1 = Questões
    2 = Dias estudados
    3 = Redações
  */

  if (statValues.length >= 1) {

    statValues[0].textContent =
      xp;

  }


  if (statValues.length >= 3) {

    statValues[2].textContent =
      streak;

  }



  /* =========================================
     PROGRESSO DO MÓDULO
     AGORA VEM DO SUPABASE
  ========================================= */

  let teoria = false;
  let video = false;
  let exercicios = false;


  if (progressoModulo) {

    teoria =
      progressoModulo.teoria;

    video =
      progressoModulo.video;

    exercicios =
      progressoModulo.exercicios;

  }


  const etapas = [
    teoria,
    video,
    exercicios
  ];


  const concluidas =
    etapas.filter(Boolean).length;


  const percentual =
    Math.round(
      (
        concluidas /
        etapas.length
      ) * 100
    );



  const progressText =
    document.getElementById(
      "dashboardModuleProgressText"
    );


  if (progressText) {

    progressText.textContent =
      `${percentual}%`;

  }



  const progressBar =
    document.getElementById(
      "dashboardModuleProgressBar"
    );


  if (progressBar) {

    progressBar.style.width =
      `${percentual}%`;

  }

}



/* =========================================
   TORNEIO
========================================= */

async function carregarTorneio() {

  const {
    data: jogadores,
    error
  } = await supabaseClient
    .from("profiles")
    .select(
      "name, xp, level"
    )
    .in(
      "name",
      ["Pedro", "Daniel"]
    );


  if (error) {

    console.error(
      "Erro ao carregar torneio:",
      error
    );

    return;

  }


  const pedro =
    jogadores.find(
      jogador =>
        jogador.name === "Pedro"
    );


  const daniel =
    jogadores.find(
      jogador =>
        jogador.name === "Daniel"
    );



  /* =========================================
     PEDRO
  ========================================= */

  if (pedro) {

    const nome =
      document.getElementById(
        "torneioPedroNome"
      );


    const xp =
      document.getElementById(
        "torneioPedroXp"
      );


    const avatar =
      document.getElementById(
        "torneioPedroAvatar"
      );


    if (nome) {

      nome.textContent =
        pedro.name;

    }


    if (xp) {

      xp.textContent =
        `${pedro.xp || 0} XP`;

    }


    if (avatar) {

      avatar.textContent =
        "P";

    }

  }



  /* =========================================
     DANIEL
  ========================================= */

  if (daniel) {

    const nome =
      document.getElementById(
        "torneioDanielNome"
      );


    const xp =
      document.getElementById(
        "torneioDanielXp"
      );


    const avatar =
      document.getElementById(
        "torneioDanielAvatar"
      );


    if (nome) {

      nome.textContent =
        daniel.name;

    }


    if (xp) {

      xp.textContent =
        `${daniel.xp || 0} XP`;

    }


    if (avatar) {

      avatar.textContent =
        "D";

    }

  }



  /* =========================================
     TÍTULO DO TORNEIO
  ========================================= */

  const titulo =
    document.getElementById(
      "tournamentTitle"
    );


  if (titulo) {

    titulo.textContent =
      "Pedro × Daniel";

  }

}



/* =========================================
   COMEÇAR
========================================= */

carregarUsuarioLogado();