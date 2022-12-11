const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let myInterval;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorInterval() {
  return (myInterval = setInterval(onStartClick, 1000));
}

function onStartClick() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

refs.startBtn.addEventListener('click', () => {
  colorInterval();
  refs.startBtn.setAttribute('disabled', '');
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(myInterval);
});

console.log('jiii');
