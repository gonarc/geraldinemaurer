document.addEventListener('DOMContentLoaded', function () {
  // Obtén todas las preguntas y respuestas
  const preguntas = document.querySelectorAll('.pregunta');

  // Itera sobre cada pregunta
  preguntas.forEach(function (pregunta) {
    // Encuentra el botón de ver

document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('.scroll-link');

    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('data-scroll-target');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
const botonVer = pregunta.querySelector('h3');

// Agrega un evento de clic al botón
botonVer.addEventListener('click', function () {
  // Encuentra la respuesta correspondiente a la pregunta
  const respuesta = pregunta.querySelector('.respuesta');

  // Alternar la visibilidad de la respuesta al hacer clic en el botón
  respuesta.style.display = (respuesta.style.display === 'none' || respuesta.style.display === '') ? 'block' : 'none';
});
});
});

var menuHamburguesa = document.getElementById("id-icon-nav");
var abrirMenu = document.getElementById("id-container-nav-r");
var cerrarMenu = document.querySelector(".container-nav-r");
var menu1 = document.querySelector("#menu1");
var menu2 = document.querySelector("#menu2");


menuHamburguesa.addEventListener("click", () => {
  abrirMenu.style.left = "0px";
  menu1.style.opacity= "0";
  menu2.style.opacity= "1";

});
cerrarMenu.addEventListener("click", () => {
  abrirMenu.style.left = "-600px";
  menu1.style.opacity= "1";
  menu2.style.opacity= "0";
});



// EFECTO SCROLL
  ScrollReveal().reveal(".aparece_en", {
    duration: 2000,
    origin: "bottom",
  });
  ScrollReveal().reveal(".parrafo", {
    duration: 2500,
    origin: "bottom",
    distance: "-50px",
  });
  ScrollReveal().reveal(".pregunta", {
    duration: 2000,
    origin: "rigth",
    distance: "-100px",
  });