const toDOform = document.querySelector(".js-toDoForm"),
    toDOinput = toDOform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos'

function loadToDos() {
    const toDOs = localStorage.getItem(TODOS_LS);
    if (toDOs !== null) {

    }
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDOinput.value;
    paintToDo(currentValue);
    toDOinput.value = "";
}

function init() {
    loadToDos();
    toDOform.addEventListener("submit", handleSubmit)
}

init();