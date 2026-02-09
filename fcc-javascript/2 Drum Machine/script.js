var b1 = document.getElementById("heater-1");
var b2 = document.getElementById("heater-2");
var b3 = document.getElementById("heater-3");
var b4 = document.getElementById("heater-4");
var b5 = document.getElementById("clap");
var b6 = document.getElementById("open-hh");
var b7 = document.getElementById("kick-n-Hat");
var b8 = document.getElementById("kick");
var b9 = document.getElementById("closed-HH");
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
