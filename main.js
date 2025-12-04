function playSong() {
    const select = document.getElementById("songSelect");
    const audio = document.getElementById("audioPlayer");
    audio.src = select.value;
    audio.play();
}

function revealMessage() {
    document.getElementById("message").classList.remove("hidden");
}
