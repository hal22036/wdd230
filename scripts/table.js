//---------------------populate table----------------
function clearFields() {
	document.getElementsByName('name').value = '';
	document.getElementsByName('email').value = '';
	document.getElementsByName('password').value = '';
	document.getElementsByName('repassword').value = '';
}
function showTable() {
	let table = document.getElementById('table');
	table.style.display = 'flex';
}

function addInputToTable() {
	let name = document.getElementsByName('name').value;
	let email = document.getElementsByName('email').value;
	let password = document.getElementsByName('password').value;
	let rating = document.getElementById('rating').value;
	//check if input fileds are empty
	// if (name != '' && email != '' && password != '' && repassword != '') {
	// 	alert(name + '' + email + '' + password + '' + repassword + '');
	// }else {
	// 	alert('One or More Input Fields Are Empty');

	name.document.getElementById('name').textContent = name;
	email.document.getElementById('email').textContent = email;
	password.document.getElementById('password').textContent = password;
	rating.document.getElementById('rating').textContent = rating;

    showTable();
	clearFields();
}
	


let submit = document.querySelector('.submitBtn');
submit.addEventListener('click', addInputToTable());