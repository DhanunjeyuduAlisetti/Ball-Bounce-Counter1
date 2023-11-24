const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const resetButton = document.getElementById('reset-btn');
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let dx = 2;
let dy = -2;
let bounceCount = 0;

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
  ctx.font = '16px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText('Bounces: ' + bounceCount, 10, 20); 
}

function draw() {
  drawBall();

  if (ballX + dx > canvas.width - 10 || ballX + dx < 10) {
    dx = -dx;
    incrementBounce();
  }
  if (ballY + dy > canvas.height - 10 || ballY + dy < 10) {
    dy = -dy;
    incrementBounce();
  }

  ballX += dx;
  ballY += dy;
  requestAnimationFrame(draw);
}

function incrementBounce() {
  bounceCount++;
}

canvas.addEventListener('click', (event) => {
  const rect = canvas.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const clickY = event.clientY - rect.top;

  ballX = clickX;
  ballY = clickY;
});

resetButton.addEventListener('click', () => {
  bounceCount = 0;
  draw();
});

draw();
