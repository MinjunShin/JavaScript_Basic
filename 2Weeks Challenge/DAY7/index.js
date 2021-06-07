const todoForm = document.querySelector(".todo-form"),
  todoInput = todoForm.querySelector("input"),
  todoList = document.querySelector(".todo-List");

const TODO_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  const span = document.createElement("span");
  span.innerText = "text";
  li.appendChild(delBtn);
  li.appendChild(span);
  todoList.appendChild(li);
  
}

function handleSubmit(event) {
  event.PreventDefault();
  const currentValue = todoInput.value;
  paintToDo(currentValue);    
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODO_LS);
  if (loadedToDos !== null) {

  }
}

function init() {
  loadToDos();
  todoForm.addEventListener("Submit", handleSubmit());
}

init();