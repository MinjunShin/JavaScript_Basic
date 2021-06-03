// <⚠️ DONT DELETE THIS ⚠️>
import "index.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const h2 = document.querySelector(".head2");
const body = document.querySelector("body");

function handleResize() {
  if(window.innerWidth >= 800)
      body.style.backgroundColor = "Orange";
  else if ( 800 > window.innerWidth && window.innerWidth > 600) 
    body.style.backgroundColor = "purple";
  else if (window.innerWidth <= 600) 
    body.style.backgroundColor = "blue";
}

function init() {
  body.style.backgroundColor = "purple";
  h2.style.color = "white";
  window.addEventListener("resize", handleResize);
}

init();