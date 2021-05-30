const toDOform = document.querySelector(".js-toDoForm"),
  toDOinput = toDOform.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = []; 

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo); 
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
        paintToDo(toDo.text);
      });
    
    }
  }

function filterFn(toDo) {
  return toDo.id === 1;
}

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function init() {
  loadToDos();
  toDOform.addEventListener("submit", handleSubmit);
}

init();
