const form = document.querySelector (".js-form");
  input = form.querySelector("input"),
  greetings = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOW_CN = "showing";

function paintGreetings(text) {
  form.classList.remove(SHOW_CN);
  greetings.classList.add(SHOW_CN);
  greetings.innerText = `hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){

  } else {
      paintGreetings(currentUser);
  }
}

function init () {
  loadName();
}

init ();