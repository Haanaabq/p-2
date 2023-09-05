function formatDate(timestamp) {
    let dt = new Date(timestamp);
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let day = days[dt.getDay()];
    return `${day} ${hours}:${minutes}`;

}
function displayTemperature(response) {
    let temp = document.querySelector("#temperature");
    let city = document.querySelector("#city");
    let description = document.querySelector("#description");
    let humidity = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let date = document.querySelector("#date");
    let icon = document.querySelector("#icon");
    cili = Math.round(response.data.main.temp);

    temp.innerHTML = Math.round(cili);
    city.innerHTML = response.data.name;
    description.innerHTML = response.data.weather[0].description;
    humidity.innerHTML = response.data.main.humidity;
    wind.innerHTML = response.data.wind.speed;
    date.innerHTML = formatDate(response.data.dt * 1000);
    icon.setAttribute("src", `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function search(city) {


    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=72bb9dab46b9ec3d65f423c63f27a9b8`;
    axios.get(apiUrl).then(displayTemperature);

}

function handdle(event) {
    event.preventDefault();
    let cityinput = document.querySelector("#city-input");
    search(cityinput.value);

}
function turnfaren(event) {
    event.preventDefault();
    let temp1 = document.querySelector("#temperature");
    sili.classList.remove("active");
    faren.classList.add("active");
    let farentemp = cili * 9 / 5 + 32;
    temp1.innerHTML = Math.round(farentemp);
}
let cili = null;
function turnsili(event) {
    event.preventDefault();
    let temp2 = document.querySelector("#temperature");
    sili.classList.add("active");
    faren.classList.remove("active");
    temp2.innerHTML = cili;
}
search("sydney");
let form = document.querySelector("#search-form");
form.addEventListener("submit", handdle);

let faren = document.querySelector("#fahrenheit-link");
faren.addEventListener("click", turnfaren);
let sili = document.querySelector("#celsius-link");
sili.addEventListener("click", turnsili);



