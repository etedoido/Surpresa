const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createHeart() {
  return {
    x: random(0, canvas.width),
    y: random(0, canvas.height),
    size: random(10, 30),
    speed: random(1, 3),
    opacity: random(0.3, 1)
  };
}

for (let i = 0; i < 50; i++) hearts.push(createHeart());

function drawHeart(x, y, size, opacity) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 30, size / 30);
  ctx.beginPath();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = "red";
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -15, -15);
  ctx.bezierCurveTo(-35, -15, -35, 10, -35, 10);
  ctx.bezierCurveTo(-35, 25, -20, 35, 0, 45);
  ctx.bezierCurveTo(20, 35, 35, 25, 35, 10);
  ctx.bezierCurveTo(35, 10, 35, -15, 15, -15);
  ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
  ctx.fill();
  ctx.restore();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(heart => {
    heart.y += heart.speed;
    if (heart.y > canvas.height) {
      heart.y = -heart.size;
      heart.x = random(0, canvas.width);
    }
    drawHeart(heart.x, heart.y, heart.size, heart.opacity);
  });

  requestAnimationFrame(animate);
}

animate();