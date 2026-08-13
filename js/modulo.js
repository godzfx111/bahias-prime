const params =
  new URLSearchParams(
    window.location.search
  );

const moduleId =
  Number(
    params.get("id")
  ) || 1;


const modulo =
  trilhaBahiasPrime.find(
    item =>
      item.id === moduleId
  );


if (!modulo) {

  document.body.innerHTML = `
    <h1 style="padding:40px;color:white;">
      Módulo não encontrado.
    </h1>
  `;

  throw new Error(
    "Módulo não encontrado."
  );

}


let usuarioLogado = null;


let progresso = {
  teoria: false,
  video: false,
  exercicios: false,
  xp_awarded: false
};


/* =========================================
   INICIAR
========================================= */

async function iniciarModulo() {

  const {
    data: { session },
    error
  } =
    await supabaseClient
      .auth
      .getSession();


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


  await carregarProgresso();

  carregarConteudo();

  atualizarInterface();

  await verificarConclusaoModulo();

}


/* =========================================
   PROGRESSO
========================================= */

async function carregarProgresso() {

  const {
    data,
    error
  } =
    await supabaseClient
      .from("progress")
      .select(
        `
        id,
        teoria,
        video,
        exercicios,
        xp_awarded
        `
      )
      .eq(
        "user_id",
        usuarioLogado.id
      )
      .eq(
        "module_id",
        moduleId
      )
      .maybeSingle();


  if (error) {

    console.error(
      "Erro ao carregar progresso:",
      error
    );

    return;

  }


  if (data) {

    progresso = {
      teoria:
        data.teoria || false,

      video:
        data.video || false,

      exercicios:
        data.exercicios || false,

      xp_awarded:
        data.xp_awarded || false
    };

  }

}


/* =========================================
   SALVAR PROGRESSO
========================================= */

async function salvarProgresso() {

  const {
    data: existente,
    error: searchError
  } =
    await supabaseClient
      .from("progress")
      .select("id")
      .eq(
        "user_id",
        usuarioLogado.id
      )
      .eq(
        "module_id",
        moduleId
      )
      .maybeSingle();


  if (searchError) {

    console.error(
      "Erro ao procurar progresso:",
      searchError
    );

    return;

  }


  if (existente) {

    const { error } =
      await supabaseClient
        .from("progress")
        .update({

          teoria:
            progresso.teoria,

          video:
            progresso.video,

          exercicios:
            progresso.exercicios

        })
        .eq(
          "id",
          existente.id
        );


    if (error) {

      console.error(
        "Erro ao atualizar progresso:",
        error
      );

      return;

    }

  } else {

    const { error } =
      await supabaseClient
        .from("progress")
        .insert({

          user_id:
            usuarioLogado.id,

          module_id:
            moduleId,

          teoria:
            progresso.teoria,

          video:
            progresso.video,

          exercicios:
            progresso.exercicios,

          xp_awarded:
            false

        });


    if (error) {

      console.error(
        "Erro ao criar progresso:",
        error
      );

      return;

    }

  }


  atualizarInterface();

  await verificarConclusaoModulo();

}


/* =========================================
   CONCLUSÃO DO MÓDULO
========================================= */

async function verificarConclusaoModulo() {

  const completo =
    progresso.teoria &&
    progresso.video &&
    progresso.exercicios;


  if (!completo) {
    return;
  }


  if (progresso.xp_awarded) {
    return;
  }


  await concederXp();

}


/* =========================================
   XP
========================================= */

async function concederXp() {

  const {
    data: perfil,
    error: profileError
  } =
    await supabaseClient
      .from("profiles")
      .select(
        "xp, level"
      )
      .eq(
        "id",
        usuarioLogado.id
      )
      .single();


  if (profileError) {

    console.error(
      "Erro ao buscar XP:",
      profileError
    );

    return;

  }


  const xpAtual =
    Number(
      perfil.xp
    ) || 0;


  const novoXp =
    xpAtual +
    Number(
      modulo.xp || 0
    );


  const novoLevel =
    Math.floor(
      novoXp / 500
    ) + 1;


  const {
    error: xpError
  } =
    await supabaseClient
      .from("profiles")
      .update({

        xp:
          novoXp,

        level:
          novoLevel

      })
      .eq(
        "id",
        usuarioLogado.id
      );


  if (xpError) {

    console.error(
      "Erro ao conceder XP:",
      xpError
    );

    return;

  }


  const {
    error: progressError
  } =
    await supabaseClient
      .from("progress")
      .update({
        xp_awarded: true
      })
      .eq(
        "user_id",
        usuarioLogado.id
      )
      .eq(
        "module_id",
        moduleId
      );


  if (progressError) {

    console.error(
      "Erro ao registrar XP:",
      progressError
    );

    return;

  }


  progresso.xp_awarded =
    true;


  mostrarRecompensa(
    modulo.xp,
    novoXp,
    novoLevel
  );

}


/* =========================================
   TOAST DE XP
========================================= */

function mostrarRecompensa(
  xpGanho,
  xpTotal,
  level
) {

  const aviso =
    document.createElement(
      "div"
    );


  aviso.classList.add(
    "xp-toast"
  );


  aviso.innerHTML = `

    <strong>
      Módulo concluído! 🎉
    </strong>

    <span>
      +${xpGanho} XP
    </span>

    <small>
      XP total:
      ${xpTotal}
      • Nível ${level}
    </small>

  `;


  document.body.appendChild(
    aviso
  );


  setTimeout(
    () => {
      aviso.remove();
    },
    5000
  );

}


/* =========================================
   CARREGAR CONTEÚDO
========================================= */

function carregarConteudo() {

  setText(
    "moduleArea",
    modulo.area
      .toUpperCase()
  );


  setText(
    "moduleTitle",
    modulo.titulo
  );


  setText(
    "moduleDescription",
    modulo.descricao
  );


  setText(
    "moduleXp",
    `+${modulo.xp} XP`
  );


  setText(
    "theoryIntro",
    modulo.teoria
      ?.introducao || ""
  );


  carregarTeoria();

  carregarExemplosResolvidos();

  carregarEstrategiasEnem();

  carregarErrosComuns();

  carregarResumo();

  carregarVideo();

  carregarExercicios();

}


/* =========================================
   TEORIA
========================================= */

function carregarTeoria() {

  const area =
    document.getElementById(
      "theoryTopics"
    );


  if (!area) {
    return;
  }


  area.innerHTML = "";


  const topicos =
    modulo.teoria
      ?.topicos || [];


  topicos.forEach(
    (topico, index) => {

      const div =
        document.createElement(
          "div"
        );


      div.classList.add(
        "theory-topic"
      );


      div.innerHTML = `

        <div class="topic-number">
          ${index + 1}
        </div>

        <div>

          <h4>
            ${topico.titulo}
          </h4>

          <p>
            ${topico.texto}
          </p>

        </div>

      `;


      area.appendChild(
        div
      );

    }
  );

}


/* =========================================
   EXEMPLOS RESOLVIDOS
========================================= */

function carregarExemplosResolvidos() {

  const exemplos =
    modulo.teoria
      ?.exemplosResolvidos || [];


  if (!exemplos.length) {
    return;
  }


  const section =
    document.getElementById(
      "resolvedExamplesSection"
    );


  const area =
    document.getElementById(
      "resolvedExamples"
    );


  if (
    !section ||
    !area
  ) {
    return;
  }


  section.hidden = false;

  area.innerHTML = "";


  exemplos.forEach(
    (exemplo, index) => {

      const card =
        document.createElement(
          "div"
        );


      card.classList.add(
        "resolved-example"
      );


      card.innerHTML = `

        <span class="example-label">
          EXEMPLO ${index + 1}
        </span>

        <h4>
          ${exemplo.titulo || "Problema"}
        </h4>

        ${
          exemplo.problema
            ? `
              <p class="example-problem">
                ${exemplo.problema}
              </p>
            `
            : ""
        }

        ${
          exemplo.raciocinio
            ? `
              <div class="example-block">
                <strong>
                  Raciocínio
                </strong>

                <p>
                  ${exemplo.raciocinio}
                </p>
              </div>
            `
            : ""
        }

        ${
          exemplo.resolucao
            ? `
              <div class="example-block">
                <strong>
                  Resolução
                </strong>

                <p>
                  ${exemplo.resolucao}
                </p>
              </div>
            `
            : ""
        }

        ${
          exemplo.conclusao
            ? `
              <div class="example-conclusion">
                ${exemplo.conclusao}
              </div>
            `
            : ""
        }

      `;


      area.appendChild(
        card
      );

    }
  );

}


/* =========================================
   ESTRATÉGIAS ENEM
========================================= */

function carregarEstrategiasEnem() {

  const estrategias =
    modulo.teoria
      ?.estrategiasEnem || [];


  if (!estrategias.length) {
    return;
  }


  const section =
    document.getElementById(
      "enemStrategiesSection"
    );


  const area =
    document.getElementById(
      "enemStrategies"
    );


  if (
    !section ||
    !area
  ) {
    return;
  }


  section.hidden = false;

  area.innerHTML = "";


  estrategias.forEach(
    estrategia => {

      const item =
        document.createElement(
          "div"
        );


      item.classList.add(
        "strategy-item"
      );


      if (
        typeof estrategia ===
        "string"
      ) {

        item.textContent =
          estrategia;

      } else {

        item.innerHTML = `

          <strong>
            ${estrategia.titulo || ""}
          </strong>

          <p>
            ${estrategia.texto || ""}
          </p>

        `;

      }


      area.appendChild(
        item
      );

    }
  );

}


/* =========================================
   ERROS COMUNS
========================================= */

function carregarErrosComuns() {

  const erros =
    modulo.teoria
      ?.errosComuns || [];


  if (!erros.length) {
    return;
  }


  const section =
    document.getElementById(
      "commonErrorsSection"
    );


  const area =
    document.getElementById(
      "commonErrors"
    );


  if (
    !section ||
    !area
  ) {
    return;
  }


  section.hidden = false;

  area.innerHTML = "";


  erros.forEach(
    erro => {

      const item =
        document.createElement(
          "div"
        );


      item.classList.add(
        "common-error-item"
      );


      if (
        typeof erro ===
        "string"
      ) {

        item.textContent =
          erro;

      } else {

        item.innerHTML = `

          <strong>
            ${erro.titulo || ""}
          </strong>

          <p>
            ${erro.texto || ""}
          </p>

        `;

      }


      area.appendChild(
        item
      );

    }
  );

}


/* =========================================
   RESUMO
========================================= */

function carregarResumo() {

  const resumo =
    modulo.teoria
      ?.resumo;


  if (!resumo) {
    return;
  }


  const section =
    document.getElementById(
      "moduleSummarySection"
    );


  const area =
    document.getElementById(
      "moduleSummary"
    );


  if (
    !section ||
    !area
  ) {
    return;
  }


  section.hidden = false;

  area.textContent =
    resumo;

}


/* =========================================
   VIDEO
========================================= */

function carregarVideo() {

  const videoArea =
    document.getElementById(
      "videoArea"
    );


  if (!videoArea) {
    return;
  }


  if (
    modulo.videoaula &&
    modulo.videoaula.url
  ) {

    videoArea.innerHTML = `

      <a
        href="${modulo.videoaula.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="video-link"
      >
        ▶ Abrir videoaula complementar
      </a>

    `;

  } else {

    videoArea.innerHTML = `

      <div class="video-empty">

        <span>
          ▶
        </span>

        <strong>
          Videoaula complementar ainda não adicionada
        </strong>

        <p>
          O conteúdo principal está nesta página.
          A videoaula funciona apenas como reforço opcional.
        </p>

      </div>

    `;

  }

}


/* =========================================
   EXERCÍCIOS
========================================= */

function carregarExercicios() {

  const exerciseArea =
    document.getElementById(
      "exerciseArea"
    );


  if (!exerciseArea) {
    return;
  }


  exerciseArea.innerHTML = "";


  const exercicios =
    modulo.exercicios || [];


  if (!exercicios.length) {

    exerciseArea.innerHTML = `
      <p>
        Nenhum exercício disponível neste módulo.
      </p>
    `;

    return;

  }


  let respondidas = 0;
  let acertos = 0;


  exercicios.forEach(
    (questao, index) => {

      const box =
        document.createElement(
          "div"
        );


      box.classList.add(
        "exercise-box"
      );


      let alternativasHTML =
        "";


      questao.alternativas.forEach(
        (
          alternativa,
          alternativaIndex
        ) => {

          alternativasHTML += `

            <button
              class="answer-option"
              data-question="${index}"
              data-answer="${alternativaIndex}"
            >

              ${
                String.fromCharCode(
                  65 +
                  alternativaIndex
                )
              })

              ${alternativa}

            </button>

          `;

        }
      );


      box.innerHTML = `

        <span class="question-number">
          QUESTÃO ${index + 1}
        </span>

        ${
          questao.nivel
            ? `
              <span class="question-level">
                ${questao.nivel}
              </span>
            `
            : ""
        }

        <h4>
          ${questao.pergunta}
        </h4>

        <div class="answer-list">
          ${alternativasHTML}
        </div>

        <div
          class="answer-feedback"
          id="feedback-${index}"
        ></div>

        <div
          class="answer-explanation"
          id="explanation-${index}"
        ></div>

      `;


      exerciseArea.appendChild(
        box
      );

    }
  );


  document
    .querySelectorAll(
      ".answer-option"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          async () => {

            const questionIndex =
              Number(
                button
                  .dataset
                  .question
              );


            const answerIndex =
              Number(
                button
                  .dataset
                  .answer
              );


            const questao =
              exercicios[
                questionIndex
              ];


            const parent =
              button.closest(
                ".exercise-box"
              );


            if (
              parent.classList.contains(
                "answered"
              )
            ) {
              return;
            }


            parent.classList.add(
              "answered"
            );


            respondidas++;


            const buttons =
              parent.querySelectorAll(
                ".answer-option"
              );


            const feedback =
              document.getElementById(
                `feedback-${questionIndex}`
              );


            const explanation =
              document.getElementById(
                `explanation-${questionIndex}`
              );


            if (
              answerIndex ===
              questao.correta
            ) {

              acertos++;


              button.classList.add(
                "correct"
              );


              feedback.textContent =
                "✓ Resposta correta";


              feedback.classList.add(
                "correct-feedback"
              );

            } else {

              button.classList.add(
                "wrong"
              );


              buttons[
                questao.correta
              ].classList.add(
                "correct"
              );


              feedback.textContent =
                "Resposta incorreta.";


              feedback.classList.add(
                "wrong-feedback"
              );

            }


            if (
              questao.explicacao
            ) {

              explanation.innerHTML = `

                <strong>
                  Entenda a resposta
                </strong>

                <p>
                  ${questao.explicacao}
                </p>

              `;


              explanation.classList.add(
                "visible"
              );

            }


            if (
              respondidas ===
              exercicios.length
            ) {

              mostrarResultadoExercicios(
                acertos,
                exercicios.length
              );


              progresso.exercicios =
                true;


              await salvarProgresso();

            }

          }
        );

      }
    );

}


/* =========================================
   RESULTADO DOS EXERCÍCIOS
========================================= */

function mostrarResultadoExercicios(
  acertos,
  total
) {

  const area =
    document.getElementById(
      "exerciseResult"
    );


  if (!area) {
    return;
  }


  const percentual =
    Math.round(
      (
        acertos /
        total
      ) * 100
    );


  let mensagem;


  if (
    percentual >= 80
  ) {

    mensagem =
      "Ótimo domínio inicial. Revise as explicações antes de avançar.";

  } else if (
    percentual >= 60
  ) {

    mensagem =
      "Bom começo, mas existem pontos para revisar antes de seguir.";

  } else {

    mensagem =
      "Esse resultado indica que vale revisar a teoria com calma antes de avançar.";

  }


  area.innerHTML = `

    <strong>
      Resultado:
      ${acertos}/${total}
      (${percentual}%)
    </strong>

    <p>
      ${mensagem}
    </p>

  `;


  area.classList.add(
    "visible"
  );

}


/* =========================================
   BOTÕES DE CONCLUSÃO
========================================= */

document.addEventListener(
  "click",
  async event => {

    const button =
      event.target.closest(
        ".complete-step-button"
      );


    if (!button) {
      return;
    }


    const step =
      button.dataset.step;


    progresso[step] =
      true;


    await salvarProgresso();

  }
);


/* =========================================
   INTERFACE
========================================= */

function atualizarInterface() {

  const etapas = [
    progresso.teoria,
    progresso.video,
    progresso.exercicios
  ];


  const concluidas =
    etapas
      .filter(Boolean)
      .length;


  const percentual =
    Math.round(
      (
        concluidas /
        etapas.length
      ) * 100
    );


  setText(
    "moduleProgressText",
    `${percentual}%`
  );


  const progressBar =
    document.getElementById(
      "moduleProgressBar"
    );


  if (progressBar) {

    progressBar.style.width =
      `${percentual}%`;

  }


  atualizarCheck(
    "checkTeoria",
    progresso.teoria
  );


  atualizarCheck(
    "checkVideo",
    progresso.video
  );


  atualizarCheck(
    "checkExercicios",
    progresso.exercicios
  );


  document
    .querySelectorAll(
      ".complete-step-button"
    )
    .forEach(
      button => {

        const step =
          button.dataset.step;


        if (
          progresso[step]
        ) {

          button.classList.add(
            "completed"
          );


          button.textContent =
            "✓ Etapa concluída";


          button.disabled =
            true;

        }

      }
    );

}


/* =========================================
   CHECKLIST
========================================= */

function atualizarCheck(
  id,
  ativo
) {

  const elemento =
    document.getElementById(
      id
    );


  if (!elemento) {
    return;
  }


  const simbolo =
    elemento.querySelector(
      "span"
    );


  if (ativo) {

    elemento.classList.add(
      "completed"
    );


    if (simbolo) {
      simbolo.textContent =
        "✓";
    }

  } else {

    elemento.classList.remove(
      "completed"
    );


    if (simbolo) {
      simbolo.textContent =
        "○";
    }

  }

}


/* =========================================
   UTIL
========================================= */

function setText(
  id,
  value
) {

  const element =
    document.getElementById(
      id
    );


  if (element) {
    element.textContent =
      value;
  }

}


/* =========================================
   INICIAR
========================================= */

iniciarModulo();