export default function backgroundChanger(keyword) {
    switch (keyword) {
        case "Clouds":
            document.body.style.backgroundImage = "url('./pics/clouds.jpg')";
            break;
        case "Rain":
            document.body.style.backgroundImage = "url('./pics/rain.jpg')";
            break;
        case "Haze":
            document.body.style.backgroundImage = "url('./pics/haze.jpg')";
            break;
        case "Clear":
            document.body.style.backgroundImage = "url('./pics/clear.jpg')";
            break;
    }
}