const visitsDisplay = document.querySelector(".visitors");
let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent =  `User Visits: ${numVisits}`;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);
todayDisplay.textContent = Date.now();