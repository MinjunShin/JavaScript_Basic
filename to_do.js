const toDOform = document.querySelector(".js-toDoForm"),
  toDOinput = toDOform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";

  const span = document.createElement("span");
  span.innerText = text;

  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;

  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDOinput.value;
  paintToDo(currentValue);
  toDOinput.value = "";
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    console.log("loadToDos func works!");

    if (loadedToDos !== null) {
      console.log("loadedToDos func works!");
      const parsedToDo = JSON.parse(loadedToDos);
      parsedToDo.forEach(function(toDo) {
        console.log(parsedToDo);
        paintToDo(toDo.text);
      });
    
    }
  }

function init() {
  loadToDos();
  toDOform.addEventListener("submit", handleSubmit);
}

init();
