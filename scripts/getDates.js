document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

const date = `&copy; ${new Date().getFullYear()} Jeni Hales, Nevada, USA`;
document.getElementById('copyright').innerHTML = date;


//number of visits to site
const visitsDisplay = document.querySelector(".count");
let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = `Visit Count: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
