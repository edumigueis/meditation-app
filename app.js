const playAudioBtn = document.querySelector("#switch-audio");
let audio = new Audio("./sounds/beach.mp3");
let pairings = [
  {
    "audio": "./sounds/beach.mp3",
    "video": "./video/beach.mp4"
  },
  {},
  {},
]
let randomIndex = 0;
let current = null;

playAudioBtn.addEventListener("click", function () {
  if (playAudioBtn.classList.contains("muted")) {
    playAudioBtn.classList.remove("muted");
    document.querySelectorAll("#switch-audio .fa-volume-up")[0].style.display =
      "block";
    document.querySelectorAll(
      "#switch-audio .fa-volume-mute"
    )[0].style.display = "none";
    current = new Audio(pairings[randomIndex].audio);
    current.play();
  } else {
    playAudioBtn.classList.add("muted");
    var children = document.querySelectorAll("#switch-audio .fa-volume-mute");
    document.querySelectorAll("#switch-audio .fa-volume-up")[0].style.display =
      "none";
    document.querySelectorAll(
      "#switch-audio .fa-volume-mute"
    )[0].style.display = "block";
    current.pause();
  }
});
