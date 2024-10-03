// Francisco J Hernandez Sanchez, 09/02/2024
let intervalId; 
let memeImage;
let startButton;
let stopButton;
window.onload = function() {
    memeImage = document.getElementById('memeImage');
    startButton = document.getElementById('startButton')
    stopButton = document.getElementById('stopButton')
    console.log(memeImage);
    function moveImage() {
        let maxX = window.innerWidth - memeImage.offsetWidth;
        let maxY = window.innerHeight - memeImage.offsetHeight;
        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);
        memeImage.style.left = randomX + 'px';
        memeImage.style.top = randomY + 'px';
    }
    function startMoving() {
        document.getElementById('startButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
        intervalId = setInterval(moveImage, 500);
    }
    function stopMoving() {
        document.getElementById('startButton').disabled = false;
        document.getElementById('stopButton').disabled = true;
        clearInterval(intervalId);
    }
    document.getElementById('startButton').onclick = startMoving;
    document.getElementById('stopButton').onclick = stopMoving;
};