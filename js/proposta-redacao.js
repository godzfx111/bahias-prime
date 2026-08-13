let usuario = null;
let tema = null;
let tentativa = null;

const titulo = document.getElementById("propostaTitulo");
const eixo = document.getElementById("propostaEixo");
const dificuldade = document.getElementById("propostaDificuldade");
const comando = document.getElementById("propostaComando");

const texto1 = document.getElementById("textoMotivador1");
const texto2 = document.getElementById("textoMotivador2");
const texto3 = document.getElementById("textoMotivador3");

const campo = document.getElementById("campoRedacao");
const contador = document.getElementById("contadorPalavras");
const statusRascunho = document.getElementById("statusRascunho");

const salvarButton = document.getElementById("salvarRascunho");
const finalizarButton = document.getElementById("finalizarRedacao");


/* =========================================
   INICIAR
========================================= */

async function iniciar() {

  const {
    data: { session },
    error
  } = await supabaseClient.auth.getSession();

  if (error) {
    console.error("Erro de autenticação:", error);
  }

  if (!session) {
    window.location.href = "../login.html";
    return;
  }

  usuario = session.user;

  const temaSalvo = localStorage.getItem(
    "bahiasPrime_temaAtual"
  );

  if (!temaSalvo) {
    window.location.href = "redacao.html";
    return;
  }

  try {
    tema = JSON.parse(temaSalvo);
  } catch (erro) {
    console.error("Tema inválido:", erro);
    window.location.href = "redacao.html";
    return;
  }

  mostrarProposta();

  await carregarTentativa();

}


/* =========================================
   MOSTRAR PROPOSTA
========================================= */

function mostrarProposta() {

  titulo.textContent =
    tema.title || "Proposta de Redação";

  eixo.textContent =
    tema.axis || "Tema geral";

  dificuldade.textContent =
    tema.difficulty || "Intermediário";

  comando.textContent =
    tema.prompt || "";

  texto1.textContent =
    tema.support_1 || "Sem texto motivador.";

  texto2.textContent =
    tema.support_2 || "Sem texto motivador.";

  texto3.textContent =
    tema.support_3 || "Sem texto motivador.";

}


/* =========================================
   CARREGAR TENTATIVA
========================================= */

async function carregarTentativa() {

  const {
    data,
    error
  } = await supabaseClient
    .from("essay_attempts")
    .select(
      "id, essay_text, status, completed_at"
    )
    .eq("user_id", usuario.id)
    .eq("theme_id", tema.id)
    .maybeSingle();

  if (error) {

    console.error(
      "Erro ao carregar redação:",
      error
    );

    return;
  }

  if (!data) {
    return;
  }

  tentativa = data;

  campo.value =
    data.essay_text || "";

  atualizarContador();

  if (data.status === "completed") {
    bloquearRedacaoFinalizada();
  }

}


/* =========================================
   CONTADOR
========================================= */

function atualizarContador() {

  const texto =
    campo.value.trim();

  const palavras =
    texto === ""
      ? 0
      : texto.split(/\s+/).length;

  contador.textContent =
    `${palavras} ${
      palavras === 1
        ? "palavra"
        : "palavras"
    }`;

  statusRascunho.textContent =
    "Alterações não salvas";

}


campo.addEventListener(
  "input",
  atualizarContador
);


/* =========================================
   SALVAR RASCUNHO
========================================= */

async function salvarRascunho() {

  if (!tentativa) {

    alert(
      "Não foi possível encontrar esta proposta no seu histórico."
    );

    return false;
  }

  salvarButton.disabled = true;

  salvarButton.textContent =
    "Salvando...";

  const {
    error
  } = await supabaseClient
    .from("essay_attempts")
    .update({
      essay_text: campo.value,
      status: "started"
    })
    .eq("id", tentativa.id)
    .eq("user_id", usuario.id);

  salvarButton.disabled = false;

  salvarButton.textContent =
    "Salvar rascunho";

  if (error) {

    console.error(
      "Erro ao salvar:",
      error
    );

    statusRascunho.textContent =
      "Erro ao salvar";

    return false;
  }

  statusRascunho.textContent =
    "Rascunho salvo ✓";

  return true;

}


salvarButton.addEventListener(
  "click",
  salvarRascunho
);


/* =========================================
   FINALIZAR
========================================= */

async function finalizarRedacao() {

  const texto =
    campo.value.trim();

  if (texto.length < 100) {

    alert(
      "Sua redação ainda está muito curta. Desenvolva melhor o texto antes de finalizar."
    );

    return;
  }

  const confirmar =
    confirm(
      "Finalizar esta redação? Depois disso ela ficará registrada como concluída."
    );

  if (!confirmar) {
    return;
  }

  finalizarButton.disabled = true;

  finalizarButton.textContent =
    "Finalizando...";

  const {
    error
  } = await supabaseClient
    .from("essay_attempts")
    .update({
      essay_text: texto,
      status: "completed",
      completed_at:
        new Date().toISOString()
    })
    .eq("id", tentativa.id)
    .eq("user_id", usuario.id);

  if (error) {

    console.error(
      "Erro ao finalizar:",
      error
    );

    finalizarButton.disabled = false;

    finalizarButton.textContent =
      "Finalizar redação";

    alert(
      "Não foi possível finalizar sua redação."
    );

    return;
  }

  tentativa.status =
    "completed";

  statusRascunho.textContent =
    "Redação concluída ✓";

  localStorage.removeItem(
    "bahiasPrime_temaAtual"
  );

  alert(
    "Redação finalizada e salva no seu histórico!"
  );

  window.location.href =
    "redacao.html";

}


finalizarButton.addEventListener(
  "click",
  finalizarRedacao
);


/* =========================================
   REDAÇÃO FINALIZADA
========================================= */

function bloquearRedacaoFinalizada() {

  campo.disabled = true;

  salvarButton.disabled = true;

  finalizarButton.disabled = true;

  salvarButton.textContent =
    "Redação salva";

  finalizarButton.textContent =
    "✓ Redação concluída";

  statusRascunho.textContent =
    "Concluída";

}


/* =========================================
   INICIAR
========================================= */

iniciar();