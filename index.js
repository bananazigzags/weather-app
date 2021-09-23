const temp = document.getElementById("temp");
const feels = document.getElementById("feels-like");
const tempMin = document.getElementById("temp-min");
const tempMax = document.getElementById("temp-max");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const display = document.getElementById("weather-display");

function getWeather(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=cf317dc7c3d35c6dc81c100d587453a4`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            temp.textContent = `Current: ${response.main.temp}\u00B0`;
            feels.textContent = `Feels Like: ${response.main.feels_like}\u00B0`;
            tempMin.textContent = `Minimum Today: ${response.main.temp_min}\u00B0`;
            tempMax.textContent = `Maximum Today: ${response.main.temp_max}\u00B0`;
            humidity.textContent = `Humidity: ${response.main.humidity}%`;
            wind.textContent = `Wind: ${response.wind.speed} km/h`;
            display.classList.add("box");

            backgroundChanger(response.weather[0].main);

            console.log(response);
            console.log(response.weather[0].main);
        });
}

function backgroundChanger(keyword) {
    if (keyword == "Clouds") {
        document.body.style.backgroundImage = "url('clouds.jpg')";
    } else if (keyword == "Rain") {
        document.body.style.backgroundImage = "url('rain.jpg')";
    } else if (keyword == "Haze") {
        document.body.style.backgroundImage = "url('haze.jpg')";
    } else if (keyword == "Clear") {
        document.body.style.backgroundImage = "url('clear.jpg')";
    }
}

const form = document.getElementById("searchbar")
const input = document.querySelector("input");
form.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
        getWeather(input.value);
    }
})