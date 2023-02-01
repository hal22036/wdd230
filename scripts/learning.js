const learning = document.querySelector('#learning');
const learningFile = 'data/learning.json';
let ul = document.createElement('ul');

getAssignments();

function displayActivity(data) {        
    data.assignments.forEach((element) => {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = `${element.label}:`;
        element.links.forEach((link) => {
            let a = document.createElement('a');            
            a.textContent = link.tag;
            a.setAttribute('href', link.href);
            p.appendChild(a);  
        })
        li.appendChild(p);
        ul.appendChild(li);
        });
    learning.appendChild(ul);
}

async function getAssignments() {
    try {
        const response = await fetch(learningFile);
        if (response.ok) {
          const data = await response.json();
        //   console.log(data); 
          displayActivity(data); 
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
}
