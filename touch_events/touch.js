// https://codepen.io/chad-boyce/pen/ExNmrJL

canvasEl = document.getElementById('canvas');
canvasEl.width = 640;
canvasEl.height = 1136;
canvas = canvasEl.getContext('2d');

canvasEl.addEventListener('touchstart', function(e) {
  draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
  draw(e.changedTouches[1].pageX, e.changedTouches[1].pageY);
});

canvasEl.addEventListener('touchmove', function(e) {
  e.preventDefault();
  draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
  draw(e.changedTouches[1].pageX, e.changedTouches[1].pageY);
});

draw = function(x, y) {
  canvas.beginPath();
  canvas.fillStyle = '#ff8330';
  canvas.arc(x, y, 30, 0, 2 * Math.PI);
  canvas.fill();
  canvas.closePath();
};