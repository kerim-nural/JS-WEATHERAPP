const apiKey = "72d6b37f4bdf1297c74848427c10a021";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(country){

    const response = await fetch(apiUrl + country + `&appid=${apiKey}`);
    const data = await response.json(); 

    console.log(data)
    
    if (country!== data.name) {
        document.querySelector(".error-message").innerHTML = "Enter an existing country name!";
        
    } else {
        
        document.querySelector(".country").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";
        //document.querySelector(".weather img").src = "images/" + data.weather[0].main.toLowerCase() + ".png";
    
        if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "images/rain.png";
        } else {
        weatherIcon = "images/snow.png";
        } 
    
        document.querySelector(".weather").style.display = "block";

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})


