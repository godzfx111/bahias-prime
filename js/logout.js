/* =========================================
   BAHIA'S PRIME — LOGOUT GLOBAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const logoutButton =
    document.getElementById("logoutButton");


  if (!logoutButton) {
    return;
  }


  logoutButton.addEventListener(
    "click",
    async () => {

      const confirmar =
        confirm("Deseja sair da sua conta?");


      if (!confirmar) {
        return;
      }


      logoutButton.disabled = true;
      logoutButton.textContent = "Saindo...";


      try {

        const { error } =
          await supabaseClient.auth.signOut();


        if (error) {
          throw error;
        }


        window.location.href =
          "../login.html";


      } catch (error) {

        console.error(
          "Erro ao sair:",
          error
        );


        alert(
          "Não foi possível sair da conta."
        );


        logoutButton.disabled = false;
        logoutButton.textContent =
          "Sair da conta";

      }

    }
  );

});