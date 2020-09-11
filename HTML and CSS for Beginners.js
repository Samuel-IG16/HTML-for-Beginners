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
