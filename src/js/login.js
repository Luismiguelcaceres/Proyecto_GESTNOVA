const btnTema = document.getElementById("btnTema");
const iconoTema = document.getElementById("iconoTema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("dark-mode", oscuro);
  iconoTema.className = oscuro ? "bi bi-sun" : "bi bi-moon-stars";
  localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
}

aplicarTema(localStorage.getItem("tema") === "oscuro");

btnTema.addEventListener("click", function () {
  aplicarTema(!document.body.classList.contains("dark-mode"));
});