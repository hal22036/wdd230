const nav = document.querySelector('#nav');
const links = document.querySelector('.user-cards')

const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const div = document.querySelector('#hamb-menu');
var closeMenu = true;

menubutton.addEventListener("click", () => {
	if (closeMenu) {
		menubutton.src = 'images/x2.webp';
		menubutton.setAttribute('width', '60');
		menubutton.setAttribute('height', '60');
		closeMenu = false;
	} else {
		menubutton.src = "images/white-hamb.webp";
		menubutton.setAttribute('width', '60');
		menubutton.setAttribute('height', '60');
		closeMenu = true;
	}
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});