let body = document.body;
let burgerMenu = document.querySelector('.nav-open');
let menu = document.querySelector('.menu');
let lang = document.querySelector('.language');
burgerMenu.addEventListener('click', function() {
    let active = menu.classList.toggle('menu--active');
    console.log(active);
    if(active) {
        lang.classList.add('language--active');
        burgerMenu.classList.add('nav-close');
    } else {
        lang.classList.remove('language--active');
        burgerMenu.classList.remove('nav-close');
    }
});
window.addEventListener('resize', function() {
    if(window.innerWidth > 575) {
        menu.classList.remove('menu--active');
    }
});

let linkList = document.querySelectorAll('.menu__link');
linkList.forEach(link => {
    link.addEventListener('click', function(e) {
        linkList.forEach(link => {
            link.classList.remove('menu__link--active');
        });
        link.classList.add('menu__link--active');
    });
});

let langList = document.querySelectorAll('.language__item');
langList.forEach(lang => {
    lang.addEventListener('click', function(e) {
        langList.forEach(lang => {
            lang.classList.remove('language__item--active');
        });
        lang.classList.add('language__item--active');
    });
});