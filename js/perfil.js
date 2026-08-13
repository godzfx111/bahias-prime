async function carregarPerfil() {

  const {
    data: { session }
  } = await supabaseClient.auth.getSession();

  if (!session) {

    window.location.href =
      "../login.html";

    return;
  }

  const {
    data: profile,
    error
  } = await supabaseClient
    .from("profiles")
    .select("name, role, xp, level, streak")
    .eq("id", session.user.id)
    .single();

  if (error) {
    console.error(
      "Erro ao carregar perfil:",
      error
    );
  }

  document.getElementById(
    "profileName"
  ).textContent =
    profile?.name || "Usuário";

  document.getElementById(
    "profileEmail"
  ).textContent =
    session.user.email || "";

}

carregarPerfil();