const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

let seconds = null;

function changeBackgroundColor() {
  const body = document.body;
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
}

startButton.addEventListener('click', function() {
  if (seconds === null) {
    seconds = setInterval(changeBackgroundColor, 1000);
  }
});

stopButton.addEventListener('click', function() {
  clearInterval(intervalId);
  seconds = null;
});