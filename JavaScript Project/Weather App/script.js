let apiKey = "3854f2b98e3975afdfacfaab34f63db3";
let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=bangalore&units=metric";

async function checkWeather(){
    let response = await fetch(apiURL + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
}

checkWeather();