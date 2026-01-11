let apiKey = "3854f2b98e3975afdfacfaab34f63db3";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let temp = document.getElementById("temp");
let cityElement = document.getElementById("city");
let humidity = document.getElementById("dh");
let wind = document.getElementById('dw');
let search = document.querySelector('.search input');
let btn = document.getElementById('btn');
let image = document.querySelector('.w1 img');

async function checkWeather(cityName){
    try {
        let response = await fetch(apiURL + cityName + `&appid=${apiKey}`);
        let data = await response.json();
        
        if (response.ok) {
            console.log(data);
            temp.innerHTML = Math.round(data.main.temp) + "°C";
            cityElement.innerHTML = data.name;
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = Math.round(data.wind.speed) + " km/h";
            if(data.weather[0].main=='Clouds'){
                image.src = "amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg";
            } else if(data.weather[0].main=='Clear'){
                image.src = "amcharts_weather_icons_1.0.0/animated/day.svg";
            } else if(data.weather[0].main=='Rain'){
                image.src = "amcharts_weather_icons_1.0.0/animated/rainy-1.svg";
            } else if(data.weather[0].main=='Drizzle'){
                image.src = "amcharts_weather_icons_1.0.0/animated/rainy-2.svg";
            } else if(data.weather[0].main=='Mist'){
                image.src = "amcharts_weather_icons_1.0.0/animated/cloudy-day-2.svg";
            } else if(data.weather[0].main=='Snow'){
                image.src = "amcharts_weather_icons_1.0.0/animated/snowy-1.svg";
            } else if(data.weather[0].main=='Thunderstorm'){
                image.src = "amcharts_weather_icons_1.0.0/animated/thunder.svg";
            } else {
                image.src = "amcharts_weather_icons_1.0.0/animated/weather.svg";
            }
        } else {
            console.error("Error:", data.message);
            alert("City not found. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        alert("Failed to fetch weather data. Please try again.");
    }
}

btn.addEventListener('click', () => {
    if (search.value.trim() !== '') {
        checkWeather(search.value);
    } else {
        alert("Please enter a city name");
    }
});

// Load default city on page load
checkWeather("haryana");