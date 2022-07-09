function openbox(box) {
    display = document.getElementById(box).style.display;
    if(display=='none') {
        document.getElementById(box).style.display='block';
    } else {
        document.getElementById(box).style.display='none';
    }
}

let linkList = document.querySelectorAll('.menu__link');
linkList.forEach(link => {
    link.addEventListener('click', function(e) {
        linkList.forEach(link => {
            link.classList.remove('menu__link--active');
        });
        linkList.forEach(link => {
            this.classList.add('menu__link--active');
        });
    });
});

let langList = document.querySelectorAll('.language__item');
langList.forEach(lang => {
    lang.addEventListener('click', function(e) {
        langList.forEach(lang => {
            lang.classList.remove('language__item--active');
        });
        langList.forEach(lang => {
            this.classList.add('language__item--active');
        });
    });
});