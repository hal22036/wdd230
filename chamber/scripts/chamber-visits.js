const visitors = document.querySelector('.visitors');

function getNumberOfDays(start, end) {
	const date1 = new Date(start);
	const date2 = new Date(end);

	const oneDay = 1000 *60 * 60 * 24;
	const diffInTime = date1.getTime() - date2.getTime();
	const diffInDays = Math.floor(diffInTime / oneDay);
	return diffInDays;
}
let start = new Date();
let end = localStorage.getItem('last-visit');



if (end !== null) {
	let daysSinceLastVisit = getNumberOfDays(start, end);
	visitors.textContent = `Days Since Last Visit: ${daysSinceLastVisit}`;
}else {
	visitors.textContent = 'This is your first visit!';
}

localStorage.setItem('last-visit', start);
