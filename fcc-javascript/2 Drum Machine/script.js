var display = document.getElementById("display");

document.querySelectorAll(".drum-pad").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    playAudioById(event.currentTarget.id);
  });
});

function playAudioById(id) {
  const button = document.getElementById(id);
  if (!button) return;

  const audio = button.querySelector("audio");
  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  display.innerText = id;
}

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const map = {
    Q: "heater-1",
    W: "heater-2",
    E: "heater-3",
    A: "heater-4",
    S: "clap",
    D: "open-HH",
    Z: "kick-n-Hat",
    X: "kick",
    C: "closed-HH",
  };

  if (map[key]) {
    playAudioById(map[key]);
  }
});
