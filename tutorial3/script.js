const canvas = document.getElementById("canvas1");
('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawDot() {
  let x = 15;
  let y = 375;
  let r = 10;
  
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  
}

drawDot();