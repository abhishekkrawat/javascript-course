/*
The web browser fires events when certain things happen on the page
For example, when the user clicks somewhere on the page, a click event is fired




We can detect events with JS using an event listener
The .addEventListener() method lets us listen for events on a DOM element




.addEventListener() takes 2 parameters:

1. The name of the event to listen to (e.g. "click")
2. A handler function that JS calls when that event is fired on this element
*/

document.addEventListener("click", () => {
    console.log("clicked")
});

