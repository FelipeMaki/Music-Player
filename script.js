const songs = [
    {title: "Fever - mqx, TR3NVHN", src: "music/Fever (Sped Up Edit).mp3"},
    {title: "It's Going Down Now - Azumi Takahashi", src: "music/It's Going Down Now.mp3"},
    {title: "Glimpse of Us - Joji", src: "music/Joji -  Glimpse of Us.mp3"}
];

let currentSongIndex = 0;

const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const songTitle = document.getElementById('song-title');
const volumeSlider = document.getElementById('volume-slider');
const volumeButton = document.getElementById('volume-btn');

function loadSong(songIndex) {
    audio.src = songs[songIndex].src;
    songTitle.textContent = songs[songIndex].title;
    audio.load();
}

function playPauseSong() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '⏸️';
    } else {
        audio.pause();
        playButton.textContent = '⏯️';
    }
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
}

function updateVolume() {
    audio.volume = volumeSlider.value;
}

playButton.addEventListener('click', playPauseSong);
prevButton.addEventListener('click', prevSong);
nextButton.addEventListener('click', nextSong);
volumeSlider.addEventListener('input', updateVolume);

loadSong(currentSongIndex);
