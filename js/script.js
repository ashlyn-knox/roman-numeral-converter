"use strict";
// import conversion functions

// set conversion method
function typeChanger() {
  const typeTitle = document.getElementById("convert-type");
  typeTitle.innerHTML === "To Arabic Numbers"
    ? (typeTitle.innerHTML = "To Roman Numerals")
    : (typeTitle.innerHTML = "To Arabic Numbers");
}
// Clear
function typeClear() {
  const typeClear = document.getElementById("convert-type");
  typeClear.innerHtml === "";
}

// form fields

// perform conversion

// add content to the history

// button to clear history
const clearHistory = document.getElementById("history-clear");
// **NOTE** feature to create the recent history as the user performs searches
