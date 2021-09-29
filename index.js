import backgroundChanger from './bgChanger.js';

const key = config.SECRET_API_KEY;

const temp = document.getElementById("temp");
const feels = document.getElementById("feels-like");
const tempMin = document.getElementById("temp-min");
const tempMax = document.getElementById("temp-max");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const display = document.getElementById("weather-display");
let tempUnit = "metric";

const date = new Date();
let hours = date.getHours();
if (hours > 20) {
    document.body.style.backgroundImage = "url('./pics/night.jpg')";
}

function getWeather(city, tempUnit) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${tempUnit}&APPID=${key}`, { mode: 'cors' })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            temp.textContent = `Current: ${response.main.temp}\u00B0`;
            feels.textContent = `Feels Like: ${response.main.feels_like}\u00B0`;
            tempMin.textContent = `Minimum Today: ${response.main.temp_min}\u00B0`;
            tempMax.textContent = `Maximum Today: ${response.main.temp_max}\u00B0`;
            humidity.textContent = `Humidity: ${response.main.humidity}%`;

            if (tempUnit === "metric") {
                wind.textContent = `Wind: ${response.wind.speed} m/s`;
            } else if (tempUnit === "imperial") {
                wind.textContent = `Wind: ${response.wind.speed} mph`;
            }
            
            display.classList.add("box");

            backgroundChanger(response.weather[0].main);
            showButtons();
        });
}

const showButtons = () => {

    const tempButtons = Array.from(document.getElementsByClassName("temp-button"));

    tempButtons.forEach((element) => {
        element.classList.remove("hidden");
    })

    tempButtons.forEach((element) => {
        element.addEventListener('click', (event) => {
            let clicked = event.target.id;
            document.getElementById(tempUnit).classList.remove("active");
            tempUnit = clicked;
            event.target.classList.add("active");
            getWeather(input.value, tempUnit);
        })
    })
}

const form = document.getElementById("searchbar")
const input = document.querySelector("input");
form.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
        getWeather(input.value, tempUnit);
    }
});

const search = document.getElementsByClassName("fa-search")[0];
search.addEventListener('click', (event) => {
        event.preventDefault();
        getWeather(input.value, tempUnit);
});
