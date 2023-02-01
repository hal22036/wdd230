const gridView = document.querySelector('.dir-grid');
const directory = 'data/members.json';

async function getDirectory() {
    try {
        const response = await fetch(directory);
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
          displayMembers(data); 
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};
getDirectory();

function displayMembers(data) {
    data.companies.forEach((element) => {
        console.log(element);
        let member = document.createElement('section');
        let company = document.createElement('h2');
        let address = document.createElement('ul');
        let street = document.createElement('li');
        let city = document.createElement('li');
        let phone = document.createElement('li');
        let url = document.createElement('li');
        let membership = document.createElement('li');        
        let logo = document.createElement('img');

        company.textContent = element.name; 
        street.textContent = element.address[0].street;
        city.textContent = `${element.address[0].city}, ${element.address[0].state} ${element.address[0].zip}`;
        phone.textContent = `Phone # ${element.phone}`;
        url.textContent = element.website;
        membership.textContent = element.membership;
        logo.setAttribute('src', element.image);
        logo.setAttribute('alt', element.name);
        // logo.setAttribute('loading', 'lazy');
        // logo.setAttribute('width', '340');
        // logo.setAttribute('height', '440');

        member.appendChild(company);
        member.appendChild(address);
        member.appendChild(street);
        member.appendChild(city);
        member.appendChild(phone);
        member.appendChild(url);
        member.appendChild(membership);
        member.appendChild(logo);
        gridView.appendChild(member);
    });
}