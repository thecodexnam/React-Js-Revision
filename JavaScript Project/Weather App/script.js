// API endpoint - now using backend proxy for security
const API_BASE_URL = window.location.origin; // Use same origin in production
const apiURL = `${API_BASE_URL}/api/weather?city=`;

let temp = document.getElementById("temp");
let cityElement = document.getElementById("city");
let humidity = document.getElementById("dh");
let wind = document.getElementById('dw');
let weatherDesc = document.getElementById("weather-desc");
let search = document.querySelector('.search input');
let btn = document.getElementById('btn');
let image = document.querySelector('.w1 img');
let card = document.querySelector('.card');

async function checkWeather(cityName){
    try {
        // Remove any existing error message
        let existingError = card.querySelector('.error-message');
        if(existingError) existingError.remove();
        
        // Add loading state
        card.classList.add('loading');
        
        // Call our backend proxy instead of directly calling the API
        let response = await fetch(apiURL + encodeURIComponent(cityName));
        let data = await response.json();
        
        if (response.ok) {
            console.log(data);
            // Fade in animation for updates
            temp.style.opacity = '0';
            cityElement.style.opacity = '0';
            
            setTimeout(() => {
                temp.innerHTML = Math.round(data.main.temp) + "°C";
                cityElement.innerHTML = data.name;
                if(weatherDesc) {
                    weatherDesc.innerHTML = data.weather[0].description;
                }
                humidity.innerHTML = data.main.humidity + "%";
                wind.innerHTML = Math.round(data.wind.speed) + " km/h";
                
                temp.style.opacity = '1';
                cityElement.style.opacity = '1';
            }, 200);
            
            // Smooth image transition
            image.style.opacity = '0';
            setTimeout(() => {
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
                image.style.opacity = '1';
            }, 300);
            
        } else {
            console.error("Error:", data.message);
            let errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = 'City not found. Please try again.';
            card.appendChild(errorDiv);
            setTimeout(() => errorDiv.remove(), 5000);
        }
    } catch (error) {
        console.error("Error fetching weather:", error);
        let errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = 'Failed to fetch weather data. Please try again.';
        card.appendChild(errorDiv);
        setTimeout(() => errorDiv.remove(), 5000);
    } finally {
        card.classList.remove('loading');
    }
}

btn.addEventListener('click', () => {
    if (search.value.trim() !== '') {
        checkWeather(search.value);
    }
});

// Add Enter key support
search.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (search.value.trim() !== '') {
            checkWeather(search.value);
        }
    }
});

// Load default city on page load
checkWeather("haryana");