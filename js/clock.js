const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();    // 먼저 Date object를 호출해줘야 한다.
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();     // getClock() 즉시 호출
setInterval(getClock, 1000);    // 매 초마다 getClock() 다시 호출
