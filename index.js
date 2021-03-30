// we need an event listener just attaches to an element (like a light switch) - 
//in this case a DOM element, our button(s)!
const myOButton = document.querySelector("#open-modal")
const myCButton = document.querySelector("#close-modal")
const myOverlay = document.querySelector("#overlay")

// DOM elements = anything you see on the page on the document (divs, buttons, tables, links--any HTML element!divs, buttons, 
//tables, links--any HTML element!)
console.log(myOButton)
function OButton(){
	myOverlay.style.display = "block"
}
function CButton(){
	myOverlay.style.display = "none"
}
myOButton.addEventListener("click", OButton)
myCButton.addEventListener("click", CButton)
// you can switch out "click" or be other types of DOM events (keydown, mouseover), any sort of event that a user can do, you 
//can capture user actions using event listeners!