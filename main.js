const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener('click', (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollReavealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    ...scrollReavealOption,
    origin: "right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scrollReavealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__content p", {
    ...scrollReavealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header__image__content", {
    duration: 1000,
    delay: 1500,
});

ScrollReveal().reveal(".product__image img", {
    ...scrollReavealOption,
    origin: "left",
});
ScrollReveal().reveal(".product__card", {
    ...scrollReavealOption,
    delay: 500,
    interval: 500,
});


const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        depth: 250,
        modifier: 1,
        scale: .75,
        slideShadows: false,
        stretch: -100,
    },

    pagination: {
        el: ".swiper-pagination",
    },
    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    
})