//your JS code here. If required.
const container = document.getElementById('board');
const COLORS = ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93'];
const SQUARES = 800;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
}

function removeColor(element) {
  setTimeout(() => {
    element.style.backgroundColor = '#1d1d1d';
  }, 1000);
}

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
