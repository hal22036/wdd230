const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');
const url = 'https://api.openweathermap.org/data/2.5/forecast?q=North%20Las%20Vegas,nv,us&units=imperial&APPID=a558cfbf5677c3eea632226cd7929c92';
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

async function apiFetch() {
    try {
      const response = await fetch(url);
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

// ------------------------------------------------------------------
    // let allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // let dayOne = new Date(data.list[2].dt * 1000); // to get the DateTime. 
    // let dayName1 = allDays[dayOne.getDay()]; // It will give day index, and based on index we can get day name from the array. 
    // let dayTwo = new Date(data.list[15].dt * 1000); // to get the DateTime. 
    // let dayName2 = allDays[dayTwo.getDay()];
    // let dayThree = new Date(data.list[18].dt * 1000); // to get the DateTime. 
    // let dayName3 = allDays[dayThree.getDay()];
   
    // let day1 = document.createElement('p');  
    // let desc1 = data.list[1].weather[0].description;  
    // let day2 = document.createElement('p');  
    // let desc2 = data.list[1].weather[0].description;
    // let day3 = document.createElement('p');  
    // let desc3 = data.list[1].weather[0].description;

    // day1.innerHTML = `${dayName1}= ${data.list[2].main.temp}&deg;F ${desc1}`;
    // day2.innerHTML = `${dayName2}= ${data.list[15].main.temp}&deg;F ${desc2}`;
    // day3.innerHTML = `${dayName3}= ${data.list[18].main.temp}&deg;F ${desc3}`;

    // forecast.appendChild(day1);
    // forecast.appendChild(day2);
    // forecast.appendChild(day3);
    // }

    

// ----------------BOBS CODE --------------------------------------------
    // const weather = document.getElementById('weather');
    // const myAppId = "606d616f01a6a87fef728d7258b2b35f";
    // const tlat = "40.53027036721598";
    // const tlon = "-112.29888255735193";
    // const gmtOffset = 7;
    // const url = `//api.openweathermap.org/data/2.5/forecast?lat=${tlat}&lon=${tlon}&appid=${myAppId}&units=imperial`
    
    
    
    // function displayWeather(data) {
    //     let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday","Saturday"]
    //     let dayCount = 0;
    //     let displayForecast = true;
    //     let mst = new Date();
    //     let thisDay = mst.getDay();
    //     for (var i = 0; i < data.list.length; i++) {
    //         gmt = new Date(data.list[i].dt_txt);
    //         nextDay = new Date(gmt.setHours(gmt.getHours() - gmtOffset)).getDay();
    //         if ((thisDay != nextDay) || (i == 0) || i == data.list.length - 1) {
    //             thisDay = nextDay;
    //             dayCount += 1;
    //             const iconsrc = `https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`;
    //             const weatherSection = document.createElement("div");
    //             weatherSection.classList.add("weather-section");
    //             const dayOfWeek = document.createElement("h4");
    //             dayOfWeek.classList.add('day-of-week');
    //             const description = document.createElement("p");
    //             const wxIcon = document.createElement("img");
                
    //             let desc = data.list[i].weather[0].description;
    //             if (i == 0) {
    //                 dayOfWeek.innerText = `Current:`;
    //             } else {
    //                 dayOfWeek.innerText = `${days[thisDay]}:`
    //             }
    //             wxIcon.setAttribute('src', iconsrc);
    //             wxIcon.setAttribute('alt', desc);
    //             description.innerHTML = `${desc} and ${data.list[i].main.temp}&deg;F`;
    //             weatherSection.appendChild(wxIcon); 
    //             weatherSection.appendChild(description);
    //             weather.appendChild(dayOfWeek);
    //             weather.appendChild(weatherSection);
    //             if (dayCount >= 4) {
    //                 break;
    //             }
    //         } else {
                
    //         }
    //     }
    //   }
    
    // async function apiFetch() {
    //     try {
    //       const response = await fetch(url);
    //       if (response.ok) {
    //         const data = await response.json();
    //         displayWeather(data);
    //       } else {
    //           throw Error(await response.text());
    //       }
    //     } catch (error) {
    //         console.log(error);
    //     }
    //   }
      
    
    //     apiFetch();

// ---------------------------------------------------------------

// for(let i= 1; i<4; i++) {
    //     let day = data.list[1].dt;
    //     let date = new Date(day.dt * 1000);
    //     let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    //     let dayOfWeek = days[date.getDay()];
    //     // data.list.forEach(day => {    
    //     //     forecast.innerHTML = `${dayOfWeek} ${data.list[i].main.temp}&deg;F`;
    //     //     console.log(dayOfWeek);
    //     }


// let getDayOfWeek = function(dayNum) {
//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";
    
//     return(weekday[dayNum]);
// }