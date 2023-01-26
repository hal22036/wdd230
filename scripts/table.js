


let fname = document.getElementById('f-name');
fname.addEventListener('change', () => {	
	let name = document.getElementById('f-name').value;
	let tName = document.getElementById('t-name');
	tName.textContent = name; 
});
let fEmail = document.getElementById('f-email');
fEmail.addEventListener('change', () => {
	let email = document.getElementById('f-email').value;
	let tEmail = document.getElementById('t-email');
	tEmail.textContent = email;
});
let fUser = document.getElementById('f-user');
fUser.addEventListener('change', () => {
	let user = document.getElementById('f-user').value;
	let tUser = document.getElementById('t-user');
	tUser.textContent = user;
});
let fRating = document.getElementById('rate');
fRating.addEventListener('change', () => {
    let rating = document.getElementById('rate').value;
    let tRating = document.getElementById('t-rating');
    tRating.textContent = rating;
});


let submit = document.querySelector('.submitBtn');
submit.addEventListener('click', () => {
	let table = document.getElementById('table');
	table.style.display = 'block';
});