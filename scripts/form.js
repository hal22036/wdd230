const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");
const message = document.querySelector("#formmessage");

repassword.addEventListener("focusout", checkSame);

// // This should be refactored.
function checkSame() {
    if (password.value !== repassword.value) {
		message.textContent = "Passwords DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp2.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

// ----------------------------------
const hearts = document.getElementsByName("hearts");
const rating = document.getElementById("rating");

function displayRatingValue() {
    rating.innerHTML = this.value;
}
for (var i=0; i< hearts.length; i++) {
    hearts[i].addEventListener('click', displayRatingValue, false);
}