const API_KEY = "0a61b7d28aced1f164e122f2f2ebdaaf";

function onGeoOk(position) {
 const lat = position.coords.latitude;
 const lon =position.coords.longitude; 
 const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
 fetch(url).then(response =>response.json().then(data => {
    const city = document.querySelector("#weather span:first-child")
    const weather = document.querySelector("#weather span:last-child")
    city.innerText = `You are in ${data.name}`;
    weather.innerText = `and now ${data.weather[0].main} / ${data.main.temp}℃`;
 }));
}
function onGeoError() {
    alert("현재 위치를 확인할 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);