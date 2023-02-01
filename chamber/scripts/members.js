const gridView = document.querySelector('.dir-grid');
const directory = 'data/members.json';

async function getDirectory() {
    try {
        const response = await fetch(directory);
        if (response.ok) {
          const data = await response.json();
          console.log(data); 
        //   displayMembers(data); 
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};

displayMembers();

function displayMembers(data) {
    data.forEach((element) => {
        console.log(element);
    });
}