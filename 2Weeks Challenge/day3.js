import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const hd = document.querySelector("h2");
const superEventHandler = {  
  handleMouseEnt: function (){
    hd.style.color = colors[0];
    hd.innerText = "The mouse is here!";
  },
  
  handleMouselev: function (){
    hd.innerText = "The mouse is gone!";
    hd.style.color = colors[1];
  },
  
  handleResize: function (){
    hd.innerText = "You just resized!";
    hd.style.color = colors[2];
  },
  
  handleContext: function(){
    hd.innerText = "That was a right click!";
    hd.style.color = colors[4];
  }
};

function init(){  
  hd.addEventListener("mouseenter", superEventHandler.handleMouseEnt);
  hd.addEventListener("mouseleave", superEventHandler.handleMouselev);
  window.addEventListener("contextmenu",superEventHandler.handleContext);
  window.addEventListener("resize", superEventHandler.handleResize);
};

init();