$( document ).ready(function() {

  /*
  When a span is clicked,
  1) push its content to the display array, which
  2) should be rendered immidiately in HTML
  */

  let display = [];

  $('span').click(function() {
    // first, check if the span that was clicks is the equals, and if so, don't push that to display but proceed immidiately to evaluate()
    if ($(this).is('#equals')) {
      evaluate();
    } else {
      display.push($(this).text());
      renderDisplay();
    }
  })

  function renderDisplay() {
    $('#screen').text(display.join(""));
  }

  /*
  When a span with id of 'equals' is clicked, it should evaluate the display array using forEach()

  - Looping over the array, it should check if isNaN() each element that is passed through a parseInt()

  - When it encounters something that is Not a Number, it should split() the array, passing in the NaN element (which we now know is an operator), change the string terms into numbers, and and save the new array to the variable terms.

  - It should then perform calculation based on what the operator is, performing the operation of the first term (index 0) by the second term (index 1).

  The result should be rendered to the screen.
  */

  function evaluate() {
    if (display.length === 0) {
      return error();
    }

      display.forEach( (element) => {
        if (isNaN(parseInt(element))) {

          let operator = element;

          let terms = display.join("").split(operator).map(element => parseInt(element));
          display = []; // reset the display

          if (operator === '÷') {
            return $('#screen').text(terms[0] / terms[1]);
          } else if (operator === 'x') {
            return $('#screen').text(terms[0] * terms[1]);
          } else if (operator === '-') {
            return $('#screen').text(terms[0] - terms[1]);
          } else if (operator === '+') {
            return $('#screen').text(terms[0] + terms[1]);
          } else {
            return error();
          }

          // if (element === '÷') {
          //   divide(element);
          // } else if (element === 'x') {
          //   multiply(element);
          // } else if (element === '-') {
          //   subtract(element);
          // } else if (element === '+') {
          //   add(element);
          // }
        }
      } )
  }


  /*
  In this version, every operation has its own function, but that is not very DRY

  let terms, result;

  function divide(operator) {
    terms = display.join("").split(operator).map(element => parseInt(element));
    result = terms[0] / terms[1];
    return $('#screen').text(result);
  }

  function multiply(operator) {
    terms = display.join("").split(operator).map(element => parseInt(element));
    result = terms[0] * terms[1];
    return $('#screen').text(result);
}

  function subtract(operator) {
    terms = display.join("").split(operator).map(element => parseInt(element));
    result = terms[0] - terms[1];
    return $('#screen').text(result);
}

  function add(operator) {
    terms = display.join("").split(operator).map(element => parseInt(element));
    result = terms[0] + terms[1];
    return $('#screen').text(result);
}
  */

  /*
  When a span with id of 'clear' is clicked, display array should be empitied and updated so the html rendering is clear as well
  */

  $('#clear').click(function () {
    display = [];
    return renderDisplay();
  })


  /*
  There should be an error function to call whenever something weird happens. When the error() function is called, it should print ERROR to the screen and to the console.
  */
  function error() {
    console.log('ERROR');
    return $('#screen').text('ERROR');
  }

});
