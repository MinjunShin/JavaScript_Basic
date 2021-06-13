// <⚠️ /DONT DELETE THIS ⚠️>
const SAVE_CNTY = "currentCountry";
const SELECT = document.getElementById("selectedClass");
 

function saveCountry(text) {
  localStorage.setItem(SAVE_CNTY, text);
}

function selectNum() {
  //const selectedValue = SELECT.options[SELECT.selectedIndex].value;
  const selectedText = SELECT.options[SELECT.selectedIndex].text; 
  console.log(`saved country : ${selectedText}`);
  saveCountry(selectedText);  
}

// function loadCountry() {
//   const loaded_Cty = localStorage.getItem(SAVE_CNTY);
//   if (loaded_Cty === null) {
//     selectNum();
//     console.log('Country has been saved at Local Storage!');    
//   } else {
//     console.log('Select the country!');
//   }
// }

// function init() {
//   loadCountry();
// }

// init();
