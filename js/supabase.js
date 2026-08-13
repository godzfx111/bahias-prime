const SUPABASE_URL = "https://bawecbzsmeumwumbfayx.supabase.co";

const SUPABASE_KEY = "sb_publishable_xkTAsmpvhzCsYGNa4bbWuA_WtqSoUo5";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
/* =========================================
   BAHIA'S PRIME
   CONTROLE VISUAL DO ADMIN
========================================= */

async function configurarMenuPorPerfil() {

  const adminLinks =
    document.querySelectorAll(
      ".admin-link"
    );


  /*
    Por segurança visual, esconde primeiro.
  */

  adminLinks.forEach(link => {
    link.style.display = "none";
  });


  try {

    const {
      data: { session }
    } = await supabaseClient
      .auth
      .getSession();


    if (!session) {
      return;
    }


    const {
      data: profile,
      error
    } = await supabaseClient
      .from("profiles")
      .select("role")
      .eq(
        "id",
        session.user.id
      )
      .single();


    if (
      error ||
      !profile
    ) {
      return;
    }


    /*
      ADMIN → MOSTRA PAINEL
    */

    if (
      profile.role === "admin"
    ) {

      adminLinks.forEach(link => {
        link.style.display = "";
      });

    }


  } catch (error) {

    console.error(
      "Erro ao configurar menu:",
      error
    );

  }

}


/* Executa quando a página carregar */

if (
  document.readyState ===
  "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    configurarMenuPorPerfil
  );

} else {

  configurarMenuPorPerfil();

}