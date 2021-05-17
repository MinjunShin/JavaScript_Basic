
const title = document.querySelector("#title");
/*
title.innerHTML = "Hi! From JS";
title.style.color = "red";

console.log(title);
console.dir(document);

document.title = "I own you now";
*/

function handleResize() {
	//console.log(event);
	console.log("I have been resized")
}
//window.addEventListener("resize", handleResize);

function handleClick() {	
	title.style.color = "blue";
}

title.addEventListener("click", handleClick);

if(20 > 5 || "MJ" === "MA") {
	console.log("yes");
} else {
	console.log("no");
}

const age = prompt("How old are you?");
console.log(age);

if (age >= 18 && age <= 21) {
	console.log("you can drink but you should not");
} else if(age > 21) {
	console.log("go ahead");
} else {
	console.log("you can't");
}

