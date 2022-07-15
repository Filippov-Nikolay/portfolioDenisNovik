let en = {
    'lang-home': 'Home',
    'lang-aboutMe': 'About me',
    'lang-skills': 'Skills',
    'lang-portfolio': 'Portfolio',
    'lang-contacts': 'Contacts',
    'lang-name': 'Denis',
    'lang-last-name': 'Novik',
    'lang-profession': 'UX | UI designer',
    'lang-age': '24 years old, Minsk',
    'lang-about-Me': 'About Me',
    'lang-text-one': "Hi, I'm Denis – UX/UI designer from Minsk. \n I'm interested in design and everything connected with it.",
    'lang-text-two': "I'm studying at courses " + 'Web and mobile design \n interfaces" in IT-Academy.',
    'lang-text-three': "Ready to implement excellent projects \n with wonderful people.",
    'lang-title-skills': 'Skills',
    'lang-subtitle-skills': 'I work in such programs as',
    'lang-title-portfolio': 'Portfolio',
    'lang-title-contacts': 'Contacts',
    'lang-text-four': 'Want to know more or just chat? \n You are welcome!',
    'lang-sand-message': 'Send message',
    'lang-text-footer': 'Like me on \n LinkedIn, Instagram, Behance, Dribble'
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
    'lang-age': '24 года, Минск',
    'lang-about-Me': 'Обо мне',
    'lang-text-one': "Привет, я Денис — UX/UI дизайнер из Минска. \n Интересуюсь дизайном и всем, что с ним связано.",
    'lang-text-two': "Я учусь на курсах" + '"Веб и мобильный дизайн \n интерфейсов" в IT-Академии."',
    'lang-text-three': "Готовы реализовать отличные проекты \n с замечательными людьми.",
    'lang-title-skills': 'Навыки',
    'lang-subtitle-skills': 'Работаю в таких программах как',
    'lang-title-portfolio': 'Портфолио',
    'lang-title-contacts': 'Контакты',
    'lang-text-four': 'Хотите узнать больше или просто поболтать? \n Добро пожаловать!',
    'lang-sand-message': 'Отправить сообщение',
    'lang-text-footer': 'Я есть в \n LinkedIn, Instagram, Behance, Dribble'
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