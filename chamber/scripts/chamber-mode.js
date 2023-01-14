const modeButton = document.querySelector('#darkModeIcon');
let light = true;
const bodyElement = document.querySelector('body');
const charColor = document.querySelectorAll('p, a, h2');
const charMenu = document.querySelectorAll('.menu-item');

modeButton.addEventListener('click', () => {
    if (light) {
        bodyElement.style.background = '#5F5F60';
        charColor.forEach((item) => item.classList.toggle('darkP'));
        charMenu.forEach((item) => item.classList.toggle('darkMenu'));
        light = false;
    } else if(!light) {
        bodyElement.style.background = '#fbf7ef';
        charColor.forEach((item) => item.classList.toggle('darkP'));
        charMenu.forEach((item) => item.classList.toggle('darkMenu'));
        light = true;
    }
});