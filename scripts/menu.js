const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const div = document.querySelector('#hamb-menu');
// let isClicked = true;

// let showHide = function (){
// 	if (isClicked){
// 		div.style.display = 'block';
// 		isClicked = false;
// 	} else{
// 		div.style.display = 'none';
// 		isClicked = true;
// }
// }

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	div.style.display = 'block';
	menubutton.classList.toggle("close");
	div.style.display.toggle('none');
});