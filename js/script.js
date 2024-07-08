// Seleciona o elemento HTML com a classe 'fa-bars' e o armazena na variável menu
let menu = document.querySelector('.fa-bars');

// Seleciona o elemento HTML com a classe 'navbar' e o armazena na variável navbar
let navbar = document.querySelector('.navbar');

// Adiciona um ouvinte de evento de clique ao elemento menu
menu.addEventListener('click', function() {
    // Alternadamente, adiciona ou remove a classe 'fa-times' ao elemento menu quando clicado
    menu.classList.toggle('fa-times');
    // Alternadamente, adiciona ou remove a classe 'nav-toggle' ao elemento navbar quando clicado
    navbar.classList.toggle('nav-toggle');
});

// Adiciona um ouvinte de evento de rolagem à janela do navegador
window.addEventListener('scroll', () => {
    // Remove a classe 'fa-times' do elemento menu quando a página é rolada
    menu.classList.remove('fa-times');
    // Remove a classe 'nav-toggle' do elemento navbar quando a página é rolada
    navbar.classList.remove('nav-toggle');
});

let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    document.querySelector('.carousel-next').addEventListener('click', () => {
        moveToNextSlide();
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        moveToPrevSlide();
    });

    function updateCarousel() {
        const carouselContainer = document.querySelector('.carousel-container');
        carouselContainer.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    function moveToNextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        updateCarousel();
    }

    function moveToPrevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    setInterval(moveToNextSlide, 3000); // Mudar imagem a cada 3 segundos

    // Alerta de bem vindo!
    document.addEventListener('DOMContentLoaded', (event) => {
        alert('Bem-vindo ao nosso site!');
    });