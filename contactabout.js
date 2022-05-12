//Defines elements in DOM
let nav = document.getElementById('nav');
let buttons = document.getElementsByTagName('button');
let links = document.getElementsByTagName('a');
let darkTheme = document.getElementById('dark');
let lightTheme = document.getElementById('light');

//Changes to dark mode
function darkMode() {
    document.body.style.color = 'white';
    document.body.style.backgroundColor = 'black';
    nav.style.borderRight = '1px solid white';
    for (link of links) {
        link.style.color = 'white';
    };
    for (button of buttons) {
        button.style.backgroundColor = 'black';
    };
}

//Changes to light mode
function lightMode() {
    document.body.style.color = '';
    document.body.style.backgroundColor = '';
    nav.style.borderRight = '';
    for (link of links) {
        link.style.color = '';
    };
    for (button of buttons) {
        button.style.backgroundColor = '';
    };
}

//Called by clicking button in Nav
darkTheme.addEventListener('click', darkMode);
lightTheme.addEventListener('click', lightMode);