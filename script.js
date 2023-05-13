console.log("Welcome to spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");

let masterplay = document.getElementById("masterplay");
let myProgressbar = document.getElementById("myProgressbar");
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  { songName: "Dhoka", filePath: "songs/1.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Kitthe Chaliye tu", filePath: "songs/2.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Ham Nashe m to nhi", filePath: "songs/3.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Kesariyan", filePath: "songs/4.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Hamari Adhuri Kahani", filePath: "songs/5.mp3", coverPath: "covers/hamari adhuri kahani.jpg" },
  { songName: "Bhool Bhulaiya", filePath: "songs/6.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Sab Khamosh hai", filePath: "songs/7.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Soni Rakh du Naam be", filePath: "songs/8.mp3", coverPath: "covers/Barish.jpg" },
  { songName: "Munna Sona ", filePath: "songs/9.mp3", coverPath: "covers/Barish.jpg" },
];
// audioElement.play();
songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

//Handle play/pause click
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//Listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("time update");

  //Update seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  // console.log(progress);

  myProgressbar.value = progress;
});
myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});
const makeallPlays = () => {
  Array.from(document.getElementsByClassName("SongItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("SongItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeallPlays();
      let songIndex = parseInt(e.target.id);
      console.log(e.target);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.src = `songs/${songIndex+1}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById('next').addEventListener('click', ()=>{
  if(songIndex>=9){
      songIndex = 0
  }
  else{
      songIndex += 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

});
document.getElementById('previous').addEventListener('click', ()=>{
  if(songIndex<=0){
      songIndex = 0
  }
  else{
      songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex+1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
});

