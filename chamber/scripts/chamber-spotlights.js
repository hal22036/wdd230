const spot1 = document.querySelector("#spot1");
const spot2 = document.querySelector("#spot2");
const spot3 = document.querySelector("#spot3");
const directory = './data/members.json';
const spotlights = [];

async function getSpotlight() {
    try {
        const response = await fetch(directory);
        if (response.ok) {
          const data = await response.json();
        //   console.log(data);
          data.companies.forEach(company => {
            if (company.membership == "Gold" || company.membership == "Silver") {
                spotlights.push(company);                
            }
          });          
          getThree();
        } else {
            throw Error(await response.text());
        }
      } catch (error) {
          console.log(error);
      }
};

getSpotlight();

function getThree() {
    while (spotlights.length > 3) {
      spotlights.splice(Math.round(Math.random()*spotlights.length), 1)
      console.log(spotlights)
    };
    spot1.innerHTML = spotlights[0].name;
    spot2.innerHTML = spotlights[1].name;
    spot3.innerHTML = spotlights[2].name;
  };