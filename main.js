const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.globalCompositeOperation = 'destination-over';

let number = 0;
let scale = 10;
let hue = Math.random() * 360;

function drawFlower() {
  let angle = number * .05;
  let radius = scale * Math.sqrt(number);
  let positionX = radius * Math.sin(angle) + canvas.width / 2;
  let positionY = radius * Math.cos(angle) + canvas.height / 2;

  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  number++;
  hue += 1.5;
}

function animate() {
  // draw each frame
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (number > 300) return;
  drawFlower();
  requestAnimationFrame(animate);
}

animate();