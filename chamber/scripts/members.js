const gridView = document.querySelector('.dir-grid');
const directory = 'data/members.json';

async function getDirectory(viewType) {
    try {
        const response = await fetch(directory);
        if (response.ok) {
          const data = await response.json();
        //   console.log(data); 
          viewType(data); 
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};
getDirectory(displayGridMembers);

function displayGridMembers(data) {
    data.companies.forEach((element) => {
        // console.log(element);
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
        membership.textContent = `Membership: ${element.membership}`;
        logo.setAttribute('src', element.image);
        logo.setAttribute('alt', element.name);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '40%');
        logo.setAttribute('height', 'auto');

        member.appendChild(company);
        member.appendChild(logo);
        address.appendChild(street);
        address.appendChild(city);
        address.appendChild(phone);
        address.appendChild(url);
        address.appendChild(membership);
        member.appendChild(address);
        gridView.appendChild(member);
    });
}

function displayListMembers(data) {    
//     const div = document.createElement('div.table');
//     let tableHeaders = ['Business', 'Address', 'Phone', 'Website', 'Membership'];
//     const createTableHead = () => {
//         while(div.firstChild) div.removeChild(div.firstChild);
//         let directoryTable = document.createElement('table');
//         directoryTable.className = 'directoryTable';
//         let directoryTableHead = document.createElement('thead');
//         directoryTableHead.className = 'directoryTableHead';
//         let tableHeaderRow = document.createElement('tr');
//         tableHeaderRow.className = 'tableHeaderRow';

//         tableHeaders.forEach(header => {
//             let tableHeader = document.createElement('th');
//             tableHeader.innerHTML = header;
//             tableHeaderRow.append(tableHeader);
//         })
//         directoryTableHead.append(tableHeaderRow);
//         directoryTable.append(directoryTableHead);

//         let tableBody = document.createElement('tbody');
//         tableBody.className = 'tableBody';
//         directoryTable.append(tableBody);

//         div.append(directoryTable);
//  }    

    data.companies.forEach((element) => {
        let member = document.createElement('h2');
        let company = document.createElement('h3');
        let street = document.createElement('p');
        let phone = document.createElement('p');;
        let url = document.createElement('p');
        let membership = document.createElement('p');  
                              
        
        company.textContent = element.name;
        street.textContent = `${element.address[0].street} ${element.address[0].city}, ${element.address[0].state} ${element.address[0].zip}`; 
        phone.textContent = `Phone # ${element.phone}`
        url.textContent = element.website;        
        membership.textContent = `Membership: ${element.membership}`;    

        member.appendChild(company);
        member.appendChild(street);
        member.appendChild(phone);
        member.appendChild(url);
        member.appendChild(membership);
        
        gridView.appendChild(member);
    }
    )
}


const gridbutton = document.querySelector("#dir-grid");
const listbutton = document.querySelector(".dir-grid");


gridbutton.addEventListener("click", () => {
	listbutton.classList.toggle("dir-list");
	listbutton.classList.toggle("dir-grid");
    gridView.innerHTML = '';
    if(listbutton.classList.value == 'dir-list') {
        getDirectory(displayListMembers);
    }else {
        getDirectory(displayGridMembers);
    };
});

