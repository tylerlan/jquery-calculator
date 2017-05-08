// let spans = $('span');
// spans.click(console.log('SPAN!'));
//
//
// let operators = $('.operator');
// operators.click(function() {
//   let text = this.text();
//   console.log(text);
// })
//


/*
When a span is clicked,
1) push its content to the display array, which
2) should be rendered immidiately in HTML
*/

let display = [];

$('span').click(function() {
  display.push(this.text());
  renderDisplay();
})

function renderDisplay() {
  $('#screen').text(display.join(""));
}

/*
When a span with id of 'equals' is clicked, it should evaluate the display array using forEach()

- Looping over the array, it should check if isNaN() each element that is passed through a parseInt()

- When it encounters something that is Not a Number, it should check which operator it is a run a specialized function(){}

- Each function should split() the array, passing in the NaN element, and and save the new array to calculation.
Then, it should break out of the loop and move on.
*/

$('#equals').click(evaluate());

function evaluate() {
    display.forEach( (element) => {
      if (isNaN(parseInt(element))) {
        if (element === '÷') {
          divide(element);
        } else if (element === 'x') {
          multiply(element);
        } else if (element === '-') {
          subtract(element);
        } else if (element === '+') {
          add(element);
        }
      }
    } )
}

let calculation = [];

function divide(operator) {
  calculation = display.join("").split(operator)
}

function multiply(operator) {
  calculation = display.join("").split(operator)
}

function subtract(operator) {
  calculation = display.join("").split(operator)
}

function add(operator) {
  calculation = display.join("").split(operator)
}

/*
The calculation array should hold two elements which are strings of numbers (check that this is true, and if not, throw an error)
Calculation should be evaluated with reduce(), and run an operation based on the operator used. This result should be rendered to the screen.
*/

$('#screen').text()

/*
When a span with id of 'clear' is clicked, display array should be empitied and updated so the html rendering is clear as well
*/

$('#clear').click()
