// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector("#output");

// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  console.log("click event", event);
  output.textContent = userInput.value;
}

// Exercise #2:
let userInput2 = document.querySelector("#userInput2");

// add an event listener on the target element
userInput2.addEventListener("input", handleInput);

let element = document.createElement("div");
element.setAttribute("class", "output");
document.querySelector("#inputEventExample").append(element);

// callback function to handle event
function handleInput(event) {
  console.log("click event", event);
  element.textContent = userInput2.value;
}
