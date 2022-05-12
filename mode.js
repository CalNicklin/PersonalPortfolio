//Defines elements in DOM
let nav = document.getElementById('nav');
let buttons = document.getElementsByTagName('button');
let links = document.getElementsByTagName('a');
let dates = document.getElementsByTagName('h5');
let projectContainers = document.getElementsByClassName("projectContainer");
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
    for (date of dates) {
        date.style.color = 'white';
    };
    for (projectContainer of projectContainers) {
        projectContainer.style.borderTop = '1px solid white';
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
    for (date of dates) {
        date.style.color = '';
    };
    for (projectContainer of projectContainers) {
        projectContainer.style.borderTop = '';
    };
}

//Called by clicking buttons in the Nav section
darkTheme.addEventListener('click', darkMode);
lightTheme.addEventListener('click', lightMode);