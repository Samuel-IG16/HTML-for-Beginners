//  by clicking on the show result button with id firstbutton
var btn = document.getElementById("firstbutton");
if (btn.innerHTML != "Hide Results") {
  btn.addEventListener("click", displayHeadings);
}else {
  btn.addEventListener("click", hideHeadings);
}

function displayHeadings() {
  btn.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displayheadings").style.display = "block";
  btn.addEventListener("click", hideHeadings);
}

function hideHeadings() {
  btn.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displayheadings").style.display = "none";
  btn.addEventListener("click", displayHeadings);
}
//  by clicking on the show result button with id secondbutton
var btn2 = document.getElementById("secondbutton");
if (btn2.innerHTML != "Hide Results") {
  btn2.addEventListener("click", displayFormatedText);
}else {
  btn2.addEventListener("click", hideFormatedText);
}

function displayFormatedText() {
  btn2.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displayformatedtext").style.display = "block";
  btn2.addEventListener("click", hideFormatedText);
}

function hideFormatedText() {
  btn2.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displayformatedtext").style.display = "none";
  btn2.addEventListener("click", displayFormatedText);
}
//  by clicking on the show result button with id thirdbutton
var btn3 = document.getElementById("thirdbutton");
if (btn3.innerHTML != "Hide Results") {
  btn3.addEventListener("click", displayPicture);
}else {
  btn3.addEventListener("click", hidePicture);
}

function displayPicture() {
  btn3.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displaypicture").style.display = "block";
  btn3.addEventListener("click", hidePicture);
}

function hidePicture() {
  btn3.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displaypicture").style.display = "none";
  btn3.addEventListener("click", displayPicture);
}
//  by clicking on the show result button with id fourthbutton
var btn4 = document.getElementById("fourthbutton");
if (btn4.innerHTML != "Hide Results") {
  btn4.addEventListener("click", displayTable);
}else {
  btn4.addEventListener("click", hideTable);
}

function displayTable() {
  btn4.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displaytable").style.display = "block";
  btn4.addEventListener("click", hideTable);
}

function hideTable() {
  btn4.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displaytable").style.display = "none";
  btn4.addEventListener("click", displayTable);
}
//  by clicking on the show result button with id fifthbutton
var btn5 = document.getElementById("fifthbutton");
if (btn5.innerHTML != "Hide Results") {
  btn5.addEventListener("click", displayList);
}else {
  btn5.addEventListener("click", hideList);
}

function displayList() {
  btn5.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displaylist").style.display = "block";
  btn5.addEventListener("click", hideList);
}

function hideList() {
  btn5.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displaylist").style.display = "none";
  btn5.addEventListener("click", displayList);
}
//  by clicking on the show result button with id sixthbutton
var btn6 = document.getElementById("sixthbutton");
if (btn6.innerHTML != "Hide Results") {
  btn6.addEventListener("click", displayDropdown);
}else {
  btn6.addEventListener("click", hideDropdown);
}

function displayDropdown() {
  btn6.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displaydropdown").style.display = "block";
  btn6.addEventListener("click", hideDropdown);
}

function hideDropdown() {
  btn6.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displaydropdown").style.display = "none";
  btn6.addEventListener("click", displayDropdown);
}
//  by clicking on the show result button with id seventhbutton
var btn7 = document.getElementById("seventhbutton");
if (btn7.innerHTML != "Hide Results") {
  btn7.addEventListener("click", displayForm);
}else {
  btn7.addEventListener("click", hideForm);
}

function displayForm() {
  btn7.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displayform").style.display = "block";
  btn7.addEventListener("click", hideForm);
}

function hideForm() {
  btn7.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displayform").style.display = "none";
  btn7.addEventListener("click", displayForm);
}
//  by clicking on the show result button with id eighthbutton
var btn8 = document.getElementById("eighthbutton");
if (btn8.innerHTML != "Hide Results") {
  btn8.addEventListener("click", displayTextarea);
}else {
  btn8.addEventListener("click", hideTextarea);
}

function displayTextarea() {
  btn8.innerHTML = "Hide Results";
  var affectstyling = document.getElementById("displaytextarea").style.display = "block";
  btn8.addEventListener("click", hideTextarea);
}

function hideTextarea() {
  btn8.innerHTML = "Show Results";
  var affectstyling = document.getElementById("displaytextarea").style.display = "none";
  btn8.addEventListener("click", displayTextarea);
}
