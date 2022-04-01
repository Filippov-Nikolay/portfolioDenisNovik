let en = {
    'lang-home': 'Home',
    'lang-aboutMe': 'About me',
    'lang-skills': 'Skills',
    'lang-portfolio': 'Portfolio',
    'lang-contacts': 'Contacts',
    'lang-name': 'Denis',
    'lang-last-name': 'Novik',
    'lang-profession': 'UX | UI designer',
    'lang-age': '24 years old, Minsk'
}

let ru = {
    'lang-home': 'Главная',
    'lang-aboutMe': 'Обо мне',
    'lang-skills': 'Навыки',
    'lang-portfolio': 'Портфолио',
    'lang-contacts': 'Контакты',
    'lang-name': 'Денис',
    'lang-last-name': 'Новик',
    'lang-profession': 'UX | UI дизайнер',
    'lang-age': '24 года, Минск'
}

function changeLang(lan) {
    lengthObj = Object.getOwnPropertyNames(lan).length;
    for (var i = 0; i <= lengthObj - 1; i++) {
        objKey = Object.getOwnPropertyNames(lan)[i];
        document.getElementById(objKey).innerText = func(objKey);
    }
    function func(a) {
        for (key in lan) {
            if (key == a) {
                return (lan[key]);
            }
        }
    }
}