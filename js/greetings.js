// HTML에서 form찾기
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.getElementById("greeting");
const todo = document.querySelector(".todo-box");

// 반복되는 string들은 대문자 변수로 지정해놓는 것이 좋다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";    // 변수명이 오타나면 js가 지적해주기때문에 string을 반복해서 쓸 때는 변수로 지정해주는게 좋다.


function onLoginSubmit(event) {
    event.preventDefault();     // preventDefault가 기본동작이 실행되는걸 막아준다.
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);     // setItem("key", value);
    paintGreetings(username);    // 이름 입력시 h1에서 hidden클래스 제거
}


function paintGreetings(username) {
    greeting.innerText = `반갑습니다 ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // shoe the greetings
    paintGreetings(savedUsername);
}