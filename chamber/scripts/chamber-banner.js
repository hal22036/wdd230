const banner = document.querySelector('#banner2');

const today = new Date().getDay();

if (today > 0 && today < 4) {
    banner.textContent = 'Join us for our Chamber of commerce meet and greet on Wednesday @ 7:00 p.m.';
    banner.setAttribute('href', 'discover.html');
} else {
    banner.textContent = 'CLICK FOR BUSINESS UPDATES';
    banner.setAttribute('href', 'directory.html');
}



