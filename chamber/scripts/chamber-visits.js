const visitors = document.querySelector('.visitors');
let start = Date.now();
let end = localstorage.getItem.Date();
let daysSinceLastVisit = getNumberOfDays(start, end);

function getNumberOfDays(start, end) {
	const date1 = new Date(start);
	const date2 = new Date(end);

	const oneDay = 1000 *60 * 60 * 24;
	const diffInTime = date2.getTime() - date1.getTime();
	const diffInDays = Math.round(diffInTime / oneDay);
	return diffInDays;
}

if (daysSinceLastVisit !== 0) {
	visitors.textContent = `Days Since Last Visit: ${daysSinceLastVisit}`;
}else {
	visitors.textContent = 'This is your first visit!';
}



localStorage.setItem('visits-days', daysSinceLastVisit);
visitors.textContent = Date.now()

console.log(getNumberOfDays(1/1/2023, 1/20/2023))