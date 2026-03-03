const usernameInput = document.getElementById("username");
const iframe = document.getElementById("skinViewer");
const download = document.getElementById("download");

usernameInput.addEventListener("input", () => {
  const username = usernameInput.value.trim();
  if (username) {
    iframe.src = `https://kurojs.github.io/McView3D/embed.html?skin=${username}&width=400&height=400`;
  } else {
    iframe.src = `https://kurojs.github.io/McView3D/embed.html?skin=schatzsuche&width=400&height=400`;
  }
  if (usernmae) {
    download.href = "https://minotar.net/skin/id.png";
  } else {
    download.href = "https://minotar.net/skin/schatzsuche.png";
  }
});


async function downloadSkin() {
  const username = document.getElementById("username").value.trim() || "schatzsuche";
  const url = `https://minotar.net/skin/${username}`;

  const blob = await (await fetch(url)).blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = username + ".png";
  a.click();
  URL.revokeObjectURL(a.href);
}


function altertSuit() {
  alert('this work in progress I will try to make it that if you click this button the skin from the person who you enterd will automaticly get a suit');
}