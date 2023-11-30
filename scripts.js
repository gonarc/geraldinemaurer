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