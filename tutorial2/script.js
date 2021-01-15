// Tutorial from https://www.youtube.com/watch?v=alRBeUMMvDM

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 450;

const image1 = new Image();
// image1.src = 'https://i.imgur.com/nKQYpZj.png';
// image1.src = 'https://i.imgur.com/lBnDfYj.png';
image1.src = './pattern.png';
// image1.src = './heart.png';

image1.addEventListener('load', function(){
    ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
    const scannedImage = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(scannedImage);
})

