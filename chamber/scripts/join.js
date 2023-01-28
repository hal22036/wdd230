
const now = new Date().toLocaleDateString('en-us', {weeday:'long', year:'numeric', month:'long', day:'numeric'});
const time = new Date().toLocaleTimeString();
const hidden = document.getElementById("hidden");
hidden.value = `Date & Time: ${now} ${time}`;
