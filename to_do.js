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
    console.log(text);
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