const todoForm = document.querySelector(".todo-form"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".todo-List");

const TODO_LS = "toDos";
let toDos = [];

function paintToDo(text) {
  const newId = toDos.length + 1;
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span"); 
  span.innerText = `${text}`;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  todoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function filterFn(toDo) {
  return toDo.id === 1;
}

function deleteToDo(event) {
  const clicked = event.target;
  const selectedli = clicked.parentNode;
  todoList.removeChild(selectedli);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(selectedli.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODO_LS, JSON.stringify(toDos))
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);   
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {
    const parsedToDo = JSON.parse(loadedToDos);
    parsedToDo.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}

init();