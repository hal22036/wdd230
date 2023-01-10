const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const div = document.querySelector('#hamb-menu');


menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	div.style.display = 'flex';
	menubutton.classList.toggle("close");
});