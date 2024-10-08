const memes = [
    'https://www.youtube.com/embed/dQw4w9WgXcQ',  // Rick Roll
    'https://www.youtube.com/embed/CuklIb9d3fI',  // Doge meme
    'https://www.youtube.com/embed/9bZkp7q19f0',  // Gangnam Style (funny dance)
    'https://www.youtube.com/embed/LsoLEjrDogU',  // Harlem Shake
    'https://www.youtube.com/embed/eBGIQ7ZuuiU'   // Keyboard Cat
];

function playRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const iframe = document.getElementById('meme-iframe');
    iframe.src = memes[randomIndex];
}

// Automatically play a random meme on page load
window.onload = playRandomMeme;
