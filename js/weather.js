const API_KEY = "25be405887a257f879d29b8654fd000d";

// Error가 없을 때 실행 될 함수
function onGeoSuccess(position) {
    const lat = position.coords.latitude;    // 위도(latitude) 얻기
    const lon = position.coords.longitude;    // 경도(longitude) 얻기
    
    parseInt();
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then( Response => Response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°`;
    });
}

// Error가 발생했을 때 실행 될 함수
function onGeoError() {
    alert("위치를 찾을 수 없습니다.");
}

// 브라우저에서 user의 위치(geolocation) 좌표를 준다.
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

/*
getCurrentPosition은 argument가 2개 필요하다.
1. 모든 게 잘 됐을 때 실행 될 함수.     2. 에러가 발생했을 때 실행 될 함수.


기본적으로 API는 다른 서버와 이야기할 수 있는 방법이다. 


fetch();
fetch는 promise다. promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것.

then();
*/