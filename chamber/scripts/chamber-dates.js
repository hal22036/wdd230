document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const date = `&copy; ${new Date().getFullYear()} Jeni Hales, WDD 230 Project`;
document.getElementById('copyright').innerHTML = date;

const now = new Date().toLocaleDateString('en-us', {weeday:'long', year:'numeric', month:'long', day:'numeric'});
const time = new Date().toLocaleTimeString();
document.getElementById("today").innerHTML = `Current Date & Time: ${now} ${time}`;

const hidden = document.getElementById("hidden").value = `Date & Time: ${now}, ${time}`;