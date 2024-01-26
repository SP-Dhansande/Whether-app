
const apikey = "647ed7b72e41bb1c6a9ded3b1ef21e71";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const weatherIcon = document.querySelector("weather-icon");

async function checkWeather( city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status== 404 ){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json();
    console.log(data);
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +"km/hr";
    
    
      
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none"
        // if(data.weather[0].main == 'Clouds'){
        //    weatherIcon.src="clouds.png";
        //   }
    }
    
     
    }

    
 document.addEventListener("DOMContentLoaded", () => {
    const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  
  searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
  });
 });
// const apikey = "647ed7b72e41bb1c6a9ded3b1ef21e71";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// async function checkWeather(city) {
//     try {
//         const response = await fetch(apiUrl + city + `&appid=${apikey}`);

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data);

//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
//     } catch (error) {
//         console.error("Error fetching weather data:", error.message);
//         // You can handle the error here, for example, display an error message to the user
//     }
// }

// document.addEventListener("DOMContentLoaded", () => {
//     const searchBox = document.querySelector(".search input");
//     const searchBtn = document.querySelector(".search button");

//     searchBtn.addEventListener("click", () => {
//         checkWeather(searchBox.value);
//     });
// });

  
// checkWeather()

