let body = document.querySelector('body');

// Add click sfx
body.addEventListener("click", () => {
    let clickSfx = document.querySelector('.click-sfx');
    clickSfx.load();
    clickSfx.play();
})

// Add background music
let musicButton = document.querySelector('.music-button'), audioPlay= false;
musicButton.addEventListener("click", () => {
    musicButton.classList.toggle("music-button-on");
    audioPlay = !audioPlay;
    let backgroundMusic = document.querySelector(".music");
    backgroundMusic.play();
    backgroundMusic.loop = true;
    if (audioPlay == true) {
        backgroundMusic.volume = 0.4;
    }
    else {
        backgroundMusic.volume = 0;
    }
})
