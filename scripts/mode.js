const modeButton = document.querySelector('#darkModeIcon');
let light = true;
const bodyElement = document.querySelector('body');
const charColor = document.querySelectorAll('p, a, h2');

modeButton.addEventListener('click', () => {
    if (light) {
        bodyElement.style.background = '#5F5F60';
        charColor.forEach((item) => item.classList.toggle('darkP'));
        light = false;
    } else if(!light) {
        bodyElement.style.background = '#fbf7ef';
        charColor.forEach((item) => item.classList.toggle('darkP'));
        light = true;
    }
});