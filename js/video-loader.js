async function carregarVideoSupabase() {

  const params =
    new URLSearchParams(
      window.location.search
    );


  const moduleId =
    Number(
      params.get("id")
    );


  if (!moduleId) {
    return;
  }


  const {
    data,
    error
  } = await supabaseClient
    .from("module_videos")
    .select("video_url")
    .eq("module_id", moduleId)
    .maybeSingle();


  if (error) {

    console.error(
      "Erro ao carregar videoaula:",
      error
    );

    return;
  }


  if (
    !data ||
    !data.video_url
  ) {
    return;
  }


  const videoArea =
    document.getElementById(
      "videoArea"
    );


  if (!videoArea) {
    return;
  }


  videoArea.innerHTML = `
    <a
      href="${data.video_url}"
      target="_blank"
      rel="noopener noreferrer"
      class="video-link"
    >
      ▶ Assistir videoaula complementar
    </a>
  `;

}


window.addEventListener(
  "load",
  carregarVideoSupabase
);