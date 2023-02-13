const nav = document.querySelector('#nav');
const links = document.querySelector('.user-cards')

const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const div = document.querySelector('#hamb-menu');
var closeMenu = true;

menubutton.addEventListener("click", () => {
	if (closeMenu) {
		menubutton.src = 'images/x.png';
		closeMenu = false;
	} else {
		menubutton.src = "images/white-hamb.png";
		closeMenu = true;
	}
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});
// function change() {
// 	var w = window.innerWidth;
// 	if (w < 600) {
// 		const img = document.createElement('img');
// 		img.setAttribute('src', "images/white-hamb.webp");
// 		img.setAttribute('alt', "menu icon");

// 		const ul = document.createElement('ul');
// 		ul.setAttribute('id', 'hamb-menu');

// 		const home = document.createElement('li');
// 		home.setAttribute('title', 'home');
// 		const aHome = document.createElement('a');
// 		aHome.setAttribute('href', 'index.html');
// 		aHome.setAttribute('class', 'menu-item');
// 		aHome.textContent = '🏠 Home';

// 		const discover = document.createElement('li');
// 		discover.setAttribute('title', 'discover');
// 		const aDiscover = document.createElement('a');
// 		aDiscover.setAttribute('href', 'discover.html');
// 		aDiscover.setAttribute('class', 'menu-item');
// 		aDiscover.textContent = '🧭 Discover';

// 		const directory = document.createElement('li');
// 		directory.setAttribute('title', 'directory');
// 		const aDirectory = document.createElement('a');
// 		aDirectory.setAttribute('href', 'directory.html');
// 		aDirectory.setAttribute('class', 'menu-item');
// 		aDirectory.textContent = "📨 Directory";

// 		const join = document.createElement('li');
// 		join.setAttribute('title', 'join');
// 		const aJoin = document.createElement('a');
// 		aJoin.setAttribute('href', 'join.html');
// 		aJoin.setAttribute('class', 'menu-item');
// 		aJoin.textContent = '✅ Join';

// 		const login = document.createElement('li');
// 		login.setAttribute('title', 'login');
// 		const aLogin = document.createElement('a');
// 		aLogin.setAttribute('href', 'index.html');
// 		aLogin.setAttribute('class', 'menu-item');
// 		aLogin.textContent = '📎 Member Login';

		
// 		home.appendChild('aHome');
// 		ul.appendChild('home');
// 		discover.appendChild('aDiscover');
// 		ul.appendChild('discover');
// 		directory.appendChild('aDirectory');
// 		ul.appendChild('directory');
// 		join.appendChild('aJoin');
// 		ul.appendChild('join');
// 		login.appendChild('aLogin');
// 		ul.appendChild('login');
// 		nav.appendChild('img');	
		
				
// 	} else {
// 		const homeLink = document.createElement('a');
// 		homeLink.setAttribute('id', 'nav-home');
// 		homeLink.setAttribute('href', 'index.html');
// 		homeLink.setAttribute('target', "_blank");
// 		homeLink.textContent = "Home";

// 		const discoverLink = document.createElement('a');
// 		discoverLink.setAttribute('id', 'nav-discover');
// 		discoverLink.setAttribute('href', 'discover.html');
// 		discoverLink.setAttribute('target', "_blank");
// 		discoverLink.textContent = "Discover";

// 		const directoryLink = document.createElement('a');
// 		directoryLink.setAttribute('id', 'nav-directory');
// 		directoryLink.setAttribute('href', 'directory.html');
// 		directoryLink.setAttribute('target', "_blank");
// 		directoryLink.textContent = "Directory";

// 		const joinLink = document.createElement('a');
// 		joinLink.setAttribute('id', 'nav-join');
// 		joinLink.setAttribute('href', 'join.html');
// 		joinLink.setAttribute('target', "_blank");
// 		joinLink.textContent = "Join";

// 		const loginLink = document.createElement('a');
// 		loginLink.setAttribute('id', 'nav-login');
// 		loginLink.setAttribute('href', 'index.html');
// 		loginLink.setAttribute('target', "_blank");
// 		loginLink.textContent = "Member Login";

// 		links.appendChild(homeLink);
// 		links.appendChild(discoverLink);
// 		links.appendChild(directoryLink);
// 		links.appendChild(joinLink);
// 		links.appendChild(loginLink);
// 	}
// };

// change();

