const weather = document.querySelector('#weather2');

const myLat = "36.29027911329074";
const myLon = "-115.15741454610898";
const myKey = "a558cfbf5677c3eea632226cd7929c92";
const myUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLon}&cnt=25&units=imperial&APPID=${myKey}`;
const gmtOffset = 8;


async function apiFetch() {
    try {
      const response = await fetch(myUrl);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
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
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"];
  let forecastDay = null;
  let gmt = null;

  for (var i=0; i<data.list.length; i+=8){
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
    let desc = data.list[i].weather[0].description;
    const weatherSection = document.createElement("div");
    weatherSection.classList.add("weather-section");
    const dayOfWeek = document.createElement("h4");
    dayOfWeek.classList.add('day-of-week');
    const description = document.createElement("p");
    const weatherIcon = document.createElement('img');

      if(i==0){
        dayOfWeek.innerText=`Current:`;
      }else {
        gmt= new Date(data.list[i].dt_txt);
        forecastDay = new Date(gmt.setHours(gmt.getHours() - gmtOffset)).getDay();        
        dayOfWeek.innerText=`${days[forecastDay]}:`;
      }      

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', '50');
    description.innerHTML = `${desc} and ${data.list[i].main.temp}&deg;F`;   
    weatherSection.appendChild(weatherIcon);
    weatherSection.appendChild(description);
    weather.appendChild(dayOfWeek);
    weather.appendChild(weatherSection);
  }
}