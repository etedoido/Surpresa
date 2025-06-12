let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === slideIndex) slide.classList.add("active");
  });
  slideIndex = (slideIndex + 1) % slides.length;
  setTimeout(showSlides, 3000);
}

showSlides();

const inicio = new Date("2022-06-12T00:00:00");

function atualizarContador() {
  const agora = new Date();
  const diff = agora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  document.getElementById("contador").textContent =
    `Estamos juntos há ${dias} dias, ${horas}h ${minutos}m ${segundos}s ❤️`;
}

setInterval(atualizarContador, 1000);