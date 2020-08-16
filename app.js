/*!
 * app.js (https://github.com/edumigueis/meditation-app)
 * Version: 1.0.0
 * Author: Eduardo Migueis @edumigueis
 * Author URL:
 * Github: https://github.com/edumigueis/meditation-app
 * app.js Copyright (c) Eduardo Migueis 2020.
 */

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
  {
    audio: "./sounds/moon.mp3",
    video: "./video/moon.mp4",
  },
  {
    audio: "./sounds/nature.mp3",
    video: "./video/nature.mp4",
  },
  {
    audio: "./sounds/goodmorning.mp3",
    video: "./video/goodmorning.mp4",
  },
];
let themes = [
  {
    first: "#70dfbd",
    sec: "#53b7bd",
  },
  {
    first: "#64c4b4",
    sec: "#3eb7db",
  },
  {
    first: "#a2df70",
    sec: "#afeb41",
  },
  {
    first: "#70addf",
    sec: "#457890",
  },
  {
    first: "#bd31f5",
    sec: "#2b9af5",
  },
  {
    first: "#eb59f0",
    sec: "#c059f0",
  },
  {
    first: "#e6b737",
    sec: "#e7d425",
  },
  {
    first: "#e68637",
    sec: "#e67737",
  },
  {
    first: "#3d6bcf",
    sec: "#4983b9",
  },
];
let randomIndex = 0;
let current = new Audio("");
let currentVideo = null;
let video = document.getElementById("stage-video");
let config = document.getElementById("config-btn");
let swatches = document.getElementsByClassName("swatch");
let poses = document.getElementsByClassName("pose");
document.getElementById("poses").style.display = "none";

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

config.addEventListener("click", function () {
  document.getElementById("config-md").classList.toggle("open");
});

document.getElementById("config-md").addEventListener("click", function (eve) {
  if (eve.target.classList.contains("modal-wrapper")) {
    document.getElementById("config-md").classList.toggle("open");
  } else {
    return;
  }
});
for (let i = 0; i < swatches.length; i++) {
  swatches[i].addEventListener("click", function (event) {
    Array.prototype.forEach.call(swatches, function (el) {
      el.classList.remove("active");
      console.log(el.tagName);
    });
    let theme = event.target.getAttribute("data-theme");
    var f = themes[parseInt(theme)].first;
    var s = themes[parseInt(theme)].sec;
    let circles = document.getElementsByClassName("circle");
    for (let index = 0; index < circles.length; index += 2) {
      circles[index].style.background = f;
    }
    for (let indexs = 1; indexs < circles.length; indexs += 2) {
      circles[indexs].style.background = s;
    }
    event.target.classList.add("active");
  });
}

document.getElementById("OpenImgUpload").addEventListener("click", function () {
  document.getElementById("imgupload").click();
});

var openFile = function (file) {
  var input = file.target;

  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var output = document.getElementById("OpenImgUpload");
    var mainOutput = document.getElementById("mainBg");
    output.src = dataURL;
    mainOutput.src = dataURL;
  };
  reader.readAsDataURL(input.files[0]);
};

let intervalIndex = 0;

setInterval(function () {
  Array.prototype.forEach.call(poses, function (el) {
    el.classList.remove("current");
  });
  poses[intervalIndex].classList.add("current");
  intervalIndex++;
  if (intervalIndex >= poses.length) {
    intervalIndex = 0;
  }
}, 10000);

document.getElementById("toggly").addEventListener("click", function () {
  if (document.getElementById("toggly").checked) {
    document.getElementById("poses").style.display = "block";
  } else {
    document.getElementById("poses").style.display = "none";
  }
});
