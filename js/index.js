$( document ).ready(function() {

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

  - When it encounters something that is Not a Number, it should check which operator it is a run a specialized function, one each for every operator
  */

  $('#equals').click(evaluate());

  function evaluate() {
    if (display.length === 0) {
      return error();
    }

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


  /*
  Each operator function should split() the array, passing in the NaN element, change the string terms into numbers, and and save the new array to the variable terms.

  The terms array should hold two elements (two mathematical terms) which are strings of numbers. Check that this is true, and if not, throw an error.

  Calculation can be done simply by performing the operation of the first term (index 0) by the second term (index 1).

  The result should be rendered to the screen.
  */

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

  /*
  When a span with id of 'clear' is clicked, display array should be empitied and updated so the html rendering is clear as well
  */

  $('#clear').click() {
    display = [];
    renderDisplay()
  }


  /*
  There should be an error function to call whenever something weird happens. When the error() function is called, it should print ERROR to the screen and to the console.
  */
  function error() {
    console.log('ERROR');
    $('#screen').text('ERROR');
  }

});
