const usernameInput = document.getElementById("username");
const iframe = document.getElementById("skinViewer");

usernameInput.addEventListener("input", () => {
  const username = usernameInput.value.trim();
  if (username) {
    iframe.src = `https://kurojs.github.io/McView3D/embed.html?skin=${username}&width=400&height=400`;
  } else {
    iframe.src = `https://kurojs.github.io/McView3D/embed.html?skin=schatzsuche&width=400&height=400`;
  }
});