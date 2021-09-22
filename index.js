const temp = document.getElementById("temp");

function getTemp(city) {
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=cf317dc7c3d35c6dc81c100d587453a4`, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        temp.textContent = `${response.main.temp}\u00B0`;
        console.log(response);
    });
}

const form = document.getElementById("searchbar")
const input = document.querySelector("input");
form.addEventListener('keydown', (event) => {
    if (event.code === 'Enter') {
        event.preventDefault();
        getTemp(input.value);
    }
})