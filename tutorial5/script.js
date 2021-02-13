const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(canvas);

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

ctx.fillStyle = 'red';
ctx.strokeStyle = 'yellow';
ctx.lineWidth - 5;
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.stroke();
console.log(ctx);