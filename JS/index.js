let slideIndex = 1;
let autoPlayInterval;

// Mostrar la primera imagen al cargar
showSlides(slideIndex);
startAutoPlay(); // Inicia el automático

// Controles de flechas
function plusSlides(n) {
  showSlides(slideIndex += n);
  resetAutoPlay(); // Reinicia el tiempo del automático al hacer clic
}

// Controles de los puntos (dots)
function currentSlide(n) {
  showSlides(slideIndex = n);
  resetAutoPlay();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  // Ocultar todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Quitar clase active de todos los dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Mostrar la imagen actual
  slides[slideIndex - 1].style.display = "block";
  
  // Activar el dot correspondiente (si existen)
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}

// ---- Automático ----
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    plusSlides(1);
  }, 3000); // Cambia cada 3 segundos
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// ---- cambiar tema ---- //

const btnModo = document.getElementById('btnModo');
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem('modo') === 'dia') {
    body.classList.add('modo-dia');
    btnModo.textContent = '🌙';
} else {
    btnModo.textContent = '☀️';
}

btnModo.addEventListener('click', () => {
    body.classList.toggle('modo-dia');

    if (body.classList.contains('modo-dia')) {
        localStorage.setItem('modo', 'dia');
        btnModo.textContent = '🌙';
    } else {
        localStorage.setItem('modo', 'noche');
        btnModo.textContent = '☀️';
    }
});

    
