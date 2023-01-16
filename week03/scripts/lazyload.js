document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const date = `&copy; ${new Date().getFullYear()} Jeni Hales, Nevada, USA`;
document.getElementById('copyright').innerHTML = date;