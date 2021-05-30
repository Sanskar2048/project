const canvas = document.querySelector("#sheet");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'blue';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
    if (!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue == 360) hue = 0;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', e => {
    ctx.lineWidth = Math.floor(Math.random() * 20) + 3;
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', e => isDrawing = false);
canvas.addEventListener('mouseout', e => isDrawing = false);

// function move(e) {
//     if (e.offsetX - x > 0) x += 1;
//     else if (e.offsetX - x == 0) x = x;
//     else x -= 1;
//     if (e.offsetY - y > 0) y += 1;
//     else if (e.offsetX - y == 0) y = y;
//     else y -= 1;
//     drawmove(x, y);
// }
// function drawmove(x, y) {
//     ctx.strokeStyle = `hsl(${hue},100%,50%)`;
//     ctx.beginPath();
//     ctx.moveTo(lastX, lastY);
//     ctx.lineTo(x, y);
//     ctx.stroke();
//     [lastX, lastY] = [x, y];
//     hue++;
//     if (hue == 360) hue = 0;
// }
// [x, y] = [0, 0];
// k=false;
// canvas.addEventListener('mousemove', move);
