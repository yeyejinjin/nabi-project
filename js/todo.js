const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();    // todo를 지운 후에 saveToDos를 한 번 더 불러야 한다.
}

function completeToDo(event){
    const li = event.target.parentElement;
    li.classList.toggle("completeToDo");

    // 완료 버튼 눌렀을시 체크박스 색상변경
    // const done = document.querySelector(".check-box");
    // done.style.background = "#ddd";
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const done = document.createElement("button"); // 완료기능
    done.classList.add("check-box");
    done.innerText ="";
    li.addEventListener("click", completeToDo);       


    const span = document.createElement("span");  // todo list
    span.innerText = newTodo.text;

    const button = document.createElement("button");  // 삭제기능
    button.classList.add("delete");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    // li.appendChild(button);
    // li.appendChild(span);
    li.appendChild(done); 
    li.appendChild(span);    // li안에 span넣기
    li.appendChild(button);  // button추가 (순서중요 위에서 span을 먼저 추가하고 button을 추가)
    toDoList.appendChild(li);   // append는 맨 마지막에 놓여야 한다.
}

function handleToDoSumbit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;  // input의 value값을 저장하고 (input의 현재 value를 새로운 변수에 복사)
    toDoInput.value = "";             // input값을 비운다.
    const newTodoObj = {
        text:newTodo,
        id: Date.now(),        // id로 각각의 li item을 구별할 수 있다.
    };
    toDos.push(newTodoObj);    // 데이터베이스로 매번 사용자가 적어둔 object를 push한다.
    paintToDo(newTodoObj);     // paintToDo에 newTodoObj를 준다.
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSumbit);

const savedToDos = localStorage.getItem(TODOS_KEY);    //localStorage에서 toDos가져오기

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;    // toDos array를 시작할 때 localStroage에서 발견되는 이전의 toDo들로 한다.(?)
    parsedToDos.forEach(paintToDo);
}

function firstFilter() { return true }  // array의 item을 유지하고 싶으면 true를 리턴해야 한다.







/*
(item) => console.log("this is the turn of ", item);
------위 아래 둘 다 동일한 것--------
function sayHello(item) {
    console.log("this is the turn of ", item);
}




Date.now()는 밀리초(1000분의 1초)를 주는 함수
-> 랜덤 아이디 만들 때 사용





array에서 어떻게 element를 삭제하는지 알기 위해서 paintToDo에서 어떤 일이 일어나는지 이해해야 한다. !important
*/