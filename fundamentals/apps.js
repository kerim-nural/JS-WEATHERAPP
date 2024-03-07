const apiKey = "72d6b37f4bdf1297c74848427c10a021";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=turkey";


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json(); 

    console.log(data);
}

checkWeather();