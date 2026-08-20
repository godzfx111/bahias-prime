let usuarioRedacao = null;
let temaAtual = null;


/* =========================================
   INICIAR
========================================= */

async function iniciarRedacao() {

  const {
    data: { session },
    error
  } =
    await supabaseClient.auth.getSession();


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


  usuarioRedacao =
    session.user;


  prepararBotoes();


  await carregarResumo();


  await procurarRedacaoEmAndamento();

}


/* =========================================
   BOTÕES
========================================= */

function prepararBotoes() {

  const botaoTema =
    document.getElementById(
      "sortearTema"
    );


  const botaoInicio =
    document.getElementById(
      "irParaTema"
    );


  const botaoComecar =
    document.getElementById(
      "comecarRedacao"
    );


  const botaoHistorico =
    document.getElementById(
      "verHistoricoRedacao"
    );


  if (botaoTema) {

    botaoTema.textContent =
      "Receber proposta";


    botaoTema.addEventListener(
      "click",
      receberProposta
    );

  }


  if (botaoInicio) {

    botaoInicio.textContent =
      "Receber proposta";


    botaoInicio.addEventListener(
      "click",
      receberProposta
    );

  }


  if (botaoComecar) {

    botaoComecar.addEventListener(
      "click",
      abrirProposta
    );

  }


  if (botaoHistorico) {

    botaoHistorico.addEventListener(
      "click",
      alternarHistoricoRedacoes
    );

  }

}


/* =========================================
   RESUMO DO ALUNO
========================================= */

async function carregarResumo() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("essay_attempts")
      .select(
        "id, status, completed_at"
      )
      .eq(
        "user_id",
        usuarioRedacao.id
      );


  if (error) {

    console.error(
      "Erro ao carregar redações:",
      error
    );

    return;

  }


  const concluidas =
    (data || []).filter(
      item =>
        item.status ===
        "completed"
    );


  const historicoTexto =
    document.getElementById(
      "historicoRedacaoTexto"
    );


  const botaoHistorico =
    document.getElementById(
      "verHistoricoRedacao"
    );


  if (historicoTexto) {

    if (
      concluidas.length === 0
    ) {

      historicoTexto.textContent =
        "Você ainda não possui redações concluídas.";

    } else {

      historicoTexto.textContent =
        `${concluidas.length} ${
          concluidas.length === 1
            ? "redação concluída"
            : "redações concluídas"
        } no seu histórico.`;

    }

  }


  if (botaoHistorico) {

    botaoHistorico.disabled =
      concluidas.length === 0;

  }


  atualizarMetaSemanal(
    concluidas
  );

}


/* =========================================
   META SEMANAL
========================================= */

function atualizarMetaSemanal(
  concluidas
) {

  const agora =
    new Date();


  const inicioSemana =
    new Date(
      agora
    );


  const dia =
    agora.getDay();


  const distanciaSegunda =
    dia === 0
      ? 6
      : dia - 1;


  inicioSemana.setDate(
    agora.getDate() -
    distanciaSegunda
  );


  inicioSemana.setHours(
    0,
    0,
    0,
    0
  );


  const feitasNaSemana =
    concluidas.filter(
      item => {

        if (
          !item.completed_at
        ) {

          return false;

        }


        return (
          new Date(
            item.completed_at
          ) >=
          inicioSemana
        );

      }
    ).length;


  const meta =
    document.getElementById(
      "redacaoMeta"
    );


  if (meta) {

    meta.textContent =
      `${Math.min(
        feitasNaSemana,
        4
      )} / 4`;

  }

}


/* =========================================
   PROCURAR REDAÇÃO EM ANDAMENTO
========================================= */

async function procurarRedacaoEmAndamento() {

  const {
    data: tentativa,
    error
  } =
    await supabaseClient
      .from("essay_attempts")
      .select(`
        id,
        theme_id,
        status,
        essay_themes (
          id,
          title,
          axis,
          difficulty,
          prompt,
          support_1,
          support_2,
          support_3
        )
      `)
      .eq(
        "user_id",
        usuarioRedacao.id
      )
      .eq(
        "status",
        "started"
      )
      .order(
        "created_at",
        {
          ascending: false
        }
      )
      .limit(1)
      .maybeSingle();


  if (error) {

    console.error(
      "Erro ao procurar redação em andamento:",
      error
    );

    return;

  }


  if (
    !tentativa ||
    !tentativa.essay_themes
  ) {

    return;

  }


  temaAtual =
    tentativa.essay_themes;


  mostrarTema(
    temaAtual,
    true
  );

}


/* =========================================
   RECEBER PROPOSTA
========================================= */

async function receberProposta() {

  if (
    !usuarioRedacao
  ) {

    return;

  }


  if (
    temaAtual
  ) {

    abrirProposta();

    return;

  }


  bloquearBotoes(
    true
  );


  const {
    data: temas,
    error: temasError
  } =
    await supabaseClient
      .from("essay_themes")
      .select(`
        id,
        title,
        axis,
        difficulty,
        prompt,
        support_1,
        support_2,
        support_3
      `)
      .eq(
        "active",
        true
      );


  if (temasError) {

    console.error(
      temasError
    );


    mostrarErro(
      "Não foi possível carregar os temas."
    );


    bloquearBotoes(
      false
    );


    return;

  }


  const {
    data: tentativas,
    error: attemptsError
  } =
    await supabaseClient
      .from("essay_attempts")
      .select(
        "theme_id"
      )
      .eq(
        "user_id",
        usuarioRedacao.id
      );


  if (attemptsError) {

    console.error(
      attemptsError
    );


    mostrarErro(
      "Não foi possível consultar seu histórico."
    );


    bloquearBotoes(
      false
    );


    return;

  }


  const usados =
    new Set(
      (tentativas || [])
        .map(
          item =>
            Number(
              item.theme_id
            )
        )
    );


  const disponiveis =
    (temas || []).filter(
      tema =>
        !usados.has(
          Number(
            tema.id
          )
        )
    );


  if (
    disponiveis.length === 0
  ) {

    mostrarErro(
      "Você já realizou todas as propostas disponíveis."
    );


    bloquearBotoes(
      false
    );


    return;

  }


  const temaEscolhido =
    disponiveis[
      Math.floor(
        Math.random() *
        disponiveis.length
      )
    ];


  const {
    error: insertError
  } =
    await supabaseClient
      .from("essay_attempts")
      .insert({

        user_id:
          usuarioRedacao.id,

        theme_id:
          temaEscolhido.id,

        status:
          "started"

      });


  if (insertError) {

    console.error(
      insertError
    );


    mostrarErro(
      "Não foi possível registrar a proposta."
    );


    bloquearBotoes(
      false
    );


    return;

  }


  temaAtual =
    temaEscolhido;


  mostrarTema(
    temaAtual,
    false
  );


  bloquearBotoes(
    false
  );

}


/* =========================================
   MOSTRAR TEMA
========================================= */

function mostrarTema(
  tema,
  continuacao = false
) {

  const titulo =
    document.getElementById(
      "temaTitulo"
    );


  const descricao =
    document.getElementById(
      "temaDescricao"
    );


  const botao =
    document.getElementById(
      "comecarRedacao"
    );


  if (titulo) {

    titulo.textContent =
      tema.title;

  }


  if (descricao) {

    descricao.textContent =
      continuacao
        ? "Você possui uma redação em andamento."
        : `${tema.axis} • ${tema.difficulty}`;

  }


  if (botao) {

    botao.disabled =
      false;


    botao.textContent =
      continuacao
        ? "Continuar redação"
        : "Começar redação";

  }

}


/* =========================================
   ABRIR PROPOSTA ATUAL
========================================= */

function abrirProposta() {

  if (
    !temaAtual
  ) {

    return;

  }


  localStorage.setItem(
    "bahiasPrime_temaAtual",
    JSON.stringify(
      temaAtual
    )
  );


  window.location.href =
    "proposta-redacao.html";

}


/* =========================================
   MOSTRAR / ESCONDER HISTÓRICO
========================================= */

async function alternarHistoricoRedacoes() {

  const area =
    document.getElementById(
      "historicoRedacoes"
    );


  const botao =
    document.getElementById(
      "verHistoricoRedacao"
    );


  if (
    !area ||
    !botao
  ) {

    return;

  }


  if (
    area.style.display ===
    "block"
  ) {

    area.style.display =
      "none";


    botao.textContent =
      "Ver histórico";


    return;

  }


  area.style.display =
    "block";


  botao.textContent =
    "Ocultar histórico";


  await carregarHistoricoRedacoes();


  area.scrollIntoView({
    behavior:
      "smooth",

    block:
      "start"
  });

}


/* =========================================
   CARREGAR HISTÓRICO
========================================= */

async function carregarHistoricoRedacoes() {

  const lista =
    document.getElementById(
      "listaHistoricoRedacoes"
    );


  if (
    !lista
  ) {

    return;

  }


  lista.innerHTML =
    "<p>Carregando suas redações...</p>";


  const {
    data,
    error
  } =
    await supabaseClient
      .from("essay_attempts")
      .select(`
        id,
        theme_id,
        essay_text,
        completed_at,
        essay_themes (
          title,
          axis
        )
      `)
      .eq(
        "user_id",
        usuarioRedacao.id
      )
      .eq(
        "status",
        "completed"
      )
      .order(
        "completed_at",
        {
          ascending: false
        }
      );


  if (error) {

    console.error(
      "Erro ao carregar histórico:",
      error
    );


    lista.innerHTML =
      "<p>Não foi possível carregar seu histórico.</p>";


    return;

  }


  const redacoes =
    data || [];


  if (
    !redacoes.length
  ) {

    lista.innerHTML =
      "<p>Você ainda não possui redações concluídas.</p>";


    return;

  }


  lista.innerHTML =
    "";


  redacoes.forEach(
    redacao => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "card redacao-historico-card";


      card.style.marginBottom =
        "16px";


      card.style.display =
        "flex";


      card.style.alignItems =
        "center";


      card.style.justifyContent =
        "space-between";


      card.style.gap =
        "20px";


      const informacoes =
        document.createElement(
          "div"
        );


      const label =
        document.createElement(
          "span"
        );


      label.className =
        "card-label";


      label.textContent =
        redacao.essay_themes?.axis ||
        "REDAÇÃO";


      const titulo =
        document.createElement(
          "h3"
        );


      titulo.textContent =
        redacao.essay_themes?.title ||
        "Redação";


      const dataTexto =
        document.createElement(
          "p"
        );


      const dataConclusao =
        redacao.completed_at
          ? new Date(
              redacao.completed_at
            ).toLocaleDateString(
              "pt-BR"
            )
          : "Data não disponível";


      dataTexto.textContent =
        `Concluída em ${dataConclusao}`;


      informacoes.appendChild(
        label
      );


      informacoes.appendChild(
        titulo
      );


      informacoes.appendChild(
        dataTexto
      );


      const botao =
        document.createElement(
          "button"
        );


      botao.className =
        "secondary-button";


      botao.textContent =
        "Ler redação";


      botao.addEventListener(
        "click",
        () => {

          abrirRedacaoHistorico(
            redacao.id
          );

        }
      );


      card.appendChild(
        informacoes
      );


      card.appendChild(
        botao
      );


      lista.appendChild(
        card
      );

    }
  );

}


/* =========================================
   ABRIR REDAÇÃO ANTIGA
========================================= */

async function abrirRedacaoHistorico(
  tentativaId
) {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("essay_attempts")
      .select(`
        id,
        theme_id,
        essay_text,
        status,
        completed_at,
        essay_themes (
          id,
          title,
          axis,
          difficulty,
          prompt,
          support_1,
          support_2,
          support_3
        )
      `)
      .eq(
        "id",
        tentativaId
      )
      .eq(
        "user_id",
        usuarioRedacao.id
      )
      .single();


  if (
    error ||
    !data ||
    !data.essay_themes
  ) {

    console.error(
      "Erro ao abrir redação:",
      error
    );


    alert(
      "Não foi possível abrir esta redação."
    );


    return;

  }


  /*
    O proposta-redacao.js já consegue
    procurar a tentativa utilizando
    user_id + theme_id.

    Então basta colocar novamente
    o tema no localStorage.
  */

  localStorage.setItem(
    "bahiasPrime_temaAtual",
    JSON.stringify(
      data.essay_themes
    )
  );


  window.location.href =
    "proposta-redacao.html";

}


/* =========================================
   BLOQUEAR BOTÕES
========================================= */

function bloquearBotoes(
  bloqueado
) {

  const botoes = [

    document.getElementById(
      "sortearTema"
    ),

    document.getElementById(
      "irParaTema"
    )

  ];


  botoes.forEach(
    botao => {

      if (
        !botao
      ) {

        return;

      }


      botao.disabled =
        bloqueado;


      botao.textContent =
        bloqueado
          ? "Buscando proposta..."
          : "Receber proposta";

    }
  );

}


/* =========================================
   ERRO
========================================= */

function mostrarErro(
  mensagem
) {

  const titulo =
    document.getElementById(
      "temaTitulo"
    );


  const descricao =
    document.getElementById(
      "temaDescricao"
    );


  if (titulo) {

    titulo.textContent =
      "Proposta indisponível";

  }


  if (descricao) {

    descricao.textContent =
      mensagem;

  }

}


/* =========================================
   INICIAR
========================================= */

iniciarRedacao();