const title = document.querySelector(".card-content h5");
const artist = document.querySelector (".artist");
const audio = document.querySelector("audio");

const data = {
    title: "// Faixa 01 //",
    artist: "zgy",
    audio: "files/dia-24.mp3",
};

title.innerText = data.title;
artist.innerHTML = data.artist;
audio.src = data.audio;
