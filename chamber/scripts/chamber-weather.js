const currentTemp = document.querySelector('#current-temp');

const myLat = "36.29027911329074";
const myLon = "-115.15741454610898";
const myKey = "a558cfbf5677c3eea632226cd7929c92";
const myUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&units=imperial&APPID=${myKey}`;

async function apiFetch() {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = await response.json();
        // console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function displayResults(data) {
    const figure = document.createElement('figure');
    const weatherIcon = document.createElement('img');
    const captionDesc = document.createElement('figcaption');
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png`;
    
    let desc = data.list[0].weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;      
    currentTemp.innerHTML = `Current Temperature: ${data.list[0].main.temp}&deg;F`;   
    figure.appendChild(weatherIcon);
    figure.appendChild(captionDesc);
    currentTemp.appendChild(figure);
}
