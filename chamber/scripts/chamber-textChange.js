arrow1 = document.querySelector('.caption1')
arrow2 = document.querySelector('.caption2')
arrow3 = document.querySelector('.caption3')
arrow4 = document.querySelector('.caption4')

function reName(arrow, response, response2) {
	var w = window.innerWidth;
	if (w < 600) {
		arrow.textContent = response; 
	} else {
		arrow.textContent = response2;
	}
};
window.onresize = reName;
reName(arrow1, 'North Las Vegas Aliante Nature Discovery Park', '🡸 North Las Vegas Aliante Nature Discovery Park');
reName(arrow2, 'North Las Vegas Aerial View', 'North Las Vegas Aerial View 🡺');
reName(arrow3, 'Local Events', '🡸 Local Events');
reName(arrow4, 'Cannery Hotel and Casino', 'Cannery Hotel and Casino 🡺');