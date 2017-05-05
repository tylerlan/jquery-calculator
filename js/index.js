// All span elements are clickable
// Spans with class 'operator' are operators
// Spans without a class are numbers
// 0 has an id of 'zero'


let spans = $('span');
spans.click(console.log('SPAN!'));


let operators = $('.operator');
operators.click(function() {
  let text = this.text();
  console.log(text);
})
