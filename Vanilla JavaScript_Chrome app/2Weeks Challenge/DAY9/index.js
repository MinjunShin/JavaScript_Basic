const prt_currentValue = document.querySelector(".printCurrentValue");
const slider = document.querySelector(".sliderClass");
const currentValue = slider.querySelector("input");
const inputForm = document.querySelector(".inputNumber");
const inputValue = inputForm.querySelector("input");
const printResult = document.querySelector(".printResult");
const printWinLost = document.querySelector(".winLose");

function genRandom() {
  const sliderValue = currentValue.value;
  const randomValue = Math.floor(Math.random() * sliderValue);
  return randomValue;
}

function handleChange(event) {
  event.preventDefault();
  prt_currentValue.innerHTML = `Generate a number between 0 and ${event.target.value}`;
}

function handleClick(event) {
  event.preventDefault();
  const randomNumber = genRandom();
  printResult.innerHTML = `You chose ${inputValue.value} , the machine chose ${randomNumber}`;
  if (Number(inputValue.value) === randomNumber) {
    printWinLost.innerText = "You Win!";
  } else {
    printWinLost.innerText = "You Lost!";
  }
}

function init() {
  currentValue.addEventListener("input", handleChange);
  inputForm.addEventListener("submit", handleClick);
}

init();
