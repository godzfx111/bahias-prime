const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginButton =
  document.getElementById("loginButton");

const loginMessage =
  document.getElementById("loginMessage");

const togglePassword =
  document.getElementById("togglePassword");


/* MOSTRAR / ESCONDER SENHA */

togglePassword.addEventListener("click", () => {

  const mostrando =
    passwordInput.type === "text";

  passwordInput.type =
    mostrando ? "password" : "text";

  togglePassword.textContent =
    mostrando ? "Mostrar" : "Ocultar";

});


/* LOGIN */

loginForm.addEventListener("submit", async (event) => {

  event.preventDefault();

  const email =
    emailInput.value.trim();

  const password =
    passwordInput.value;

  loginButton.disabled = true;

  loginButton.textContent =
    "Entrando...";

  loginMessage.textContent = "";

  loginMessage.className =
    "login-message";


  try {

    const { data, error } =
      await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
      });


    if (error) {
      throw error;
    }


    if (!data.user) {
      throw new Error(
        "Não foi possível identificar o usuário."
      );
    }


    loginMessage.textContent =
      "✓ Login realizado com sucesso.";

    loginMessage.classList.add("success");


    setTimeout(() => {

      window.location.href =
        "index.html";

    }, 600);


  } catch (error) {

    console.error(error);

    loginMessage.textContent =
      "E-mail ou senha incorretos.";

    loginMessage.classList.add("error");

  } finally {

    loginButton.disabled = false;

    loginButton.textContent =
      "Entrar no Bahia's Prime";

  }

});