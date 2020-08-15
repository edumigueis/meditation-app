const playAudioBtn = document.querySelector("#switch-audio");
const randomize = document.querySelector("#random-audio");
let audio = new Audio("./sounds/beach.mp3");
let pairings = [
  {
    audio: "./sounds/beach.mp3",
    video: "./video/beach.mp4",
  },
  {
    audio: "./sounds/rain.mp3",
    video: "./video/rain.mp4",
  },
  {
    audio: "./sounds/night.mp3",
    video: "./video/chill.mp4",
  },
  {
    audio: "./sounds/glitter.mp3",
    video: "./video/glitter.mp4",
  },
  {
    audio: "./sounds/yoga.mp3",
    video: "./video/yoga.mp4",
  },
];
let randomIndex = 0;
let current = new Audio("");
let currentVideo = null;
let video = document.getElementById("stage-video");

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

randomize.addEventListener("click", function () {
  if (playAudioBtn.classList.contains("muted")) {
    playAudioBtn.classList.remove("muted");
    document.querySelectorAll("#switch-audio .fa-volume-up")[0].style.display =
      "block";
    document.querySelectorAll(
      "#switch-audio .fa-volume-mute"
    )[0].style.display = "none";
  }
  randomIndex = Math.floor(Math.random() * (pairings.length - 0) + 0);
  current.pause();
  current = new Audio(pairings[randomIndex].audio);
  current.play();
  video.src = pairings[randomIndex].video;
  video.play();
});
document.getElementById("toggle-video").addEventListener("click", function () {
  video.classList.toggle("none");
  if (video.classList.contains("none")) {
    document
      .querySelectorAll("#toggle-video .fa-video")[0]
      .classList.add("none");
    document
      .querySelectorAll("#toggle-video .fa-video-slash")[0]
      .classList.remove("none");
  } else {
    document
      .querySelectorAll("#toggle-video .fa-video")[0]
      .classList.remove("none");
    document
      .querySelectorAll("#toggle-video .fa-video-slash")[0]
      .classList.add("none");
  }
});

current.addEventListener("ended", function () {
  current.load();
  current.play();
});
