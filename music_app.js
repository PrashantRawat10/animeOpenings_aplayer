  const music= document.querySelector("audio");
  const play= document.getElementById("play");
  const img= document.querySelector("img");
  const title= document.getElementById("title");
  const songName= document.getElementById("songName");
  let slider = document.querySelector('#duration_slider')
  let show_duration = document.querySelector('#show_duration');
  const previous= document.getElementById("previous");
  const next= document.getElementById("next");
  let timer;
  

  //creating array of objects to feed in song, name, and title
  const songs = [
    {
      name: "aot_song",
      title: "Attack on Titan",
      songName: "Guren no Yumiya",
    },
    {
    name: "demonSlayer_song",
    title: "Demon Slayer",
    songName: "Gurenge",
  },
{
  name: "mha_song",
  title: "My Hero Academia",
  songName: "The Day",
},
{
  name: "naruto_song",
  title: "Naruto",
  songName: "Bluebird",
},
{
  name: "tokyoGhoul_song",
  title: "Tokyo Ghoul",
  songName: "Unravel",
},
{
  name : "killua_song",
  title : "Hunter x Hunter",
  songName : "Departure",
},
{
  name : "blackClover_song",
  title : "Black Clover",
  songName : "Black Catcher",
},
{
  name : "jjk_song",
  title : "Jujutsu Kaisen",
  songName : "Vivid Vice",
},
{
  name : "fairytail_song",
  title : "Fairy Tail",
  songName : "Snow Fairy",
},
{
  name : "codeGeass_song",
  title : "Code Geass",
  songName : "Colors",
},
{
  name : "onePiece_song",
  title : "One Piece",
  songName : "Fight Together",
},
{
  name : "7ds_song",
  title : "Seven Deadly Sins",
  songName : "Netsujou no Spectrum",
},
];


  let isPlaying=false;

    const playMusic = function() {
    isPlaying=true;
    music.play();
    play.classList.replace("fa-play-circle", "fa-pause-circle");
  };

  const pauseMusic = function() {
    isPlaying= false;
    music.pause();
    play.classList.replace("fa-pause-circle", "fa-play-circle");
  };

  play.addEventListener("click", function(){
  if(isPlaying){
    pauseMusic();
  }
  else{
    playMusic();
  }

  //  isPlaying ? pauseMusic() : playMusic();
  });

  const musicChange = function(songs) {
    title.textContent = songs.title;
    songName.textContent = songs.songName;
    music.src = "sounds/" + songs.name + ".mp3";
    img.src = "images/" + songs.name + ".jpg";
    music.load();

    timer = setInterval(range_slider , 1000);
  };
  //musicChange(songs[2]);
  songIndex = 0;

  const nextSong = function() {
    songIndex = (songIndex + 1) % songs.length;
    musicChange(songs[songIndex]);
    playMusic();
  };

  const previousSong = function() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    musicChange(songs[songIndex]);
    playMusic();
  };
  next.addEventListener("click", nextSong);
  previous.addEventListener("click", previousSong);
  
  function change_duration() {
    slider_position= music.duration * (slider.value / 100);
    music.currentTime = slider_position;
  }
  function range_slider() {
    let position = 0;

    if(!isNaN(music.duration)){
      position = music.currentTime * (100 / music.duration);
      slider.value = position;
    }
  }