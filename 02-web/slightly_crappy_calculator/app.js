console.log('JAVASCRIPT WORKING crappy calculator');

// API

// var push = function(){
//   console.log('I AM BEING PUSHED');
// };


document.getElementsByTagName('h1')[0].addEventListener('click', function(){
  console.log('I AM BEING PUSHED');
});


// searching

// to a DOM element listen to events

// update some properties of a DOM Element;

var addTwoNumbers = function(num1, num2) {
  return num1 + num2;
};


// button
var crapItBtn = document.querySelector('.crap-it-btn');
// input1
var num1Input = document.querySelector('.num1-input');
// input2
var num2Input = document.querySelector('.num2-input');
// result
var resultInput = document.querySelector('.result');

crapItBtn.addEventListener('click', function() {
  var result = addTwoNumbers(+num1Input.value, +num2Input.value);
  resultInput.value = result;
});

//add another button to clear all the input back to the beginning

var clearBtn = document.querySelector('.clear-btn');

clearBtn.addEventListener('click', function() {
  num1Input.value = '';
  num2Input.value = '';
  resultInput.value = '';
});

var themeOne = document.querySelector('body');
var themeOneBtn = document.querySelector('.theme-one');

themeOneBtn.addEventListener('click', function(){
  themeOne.style.background = 'mistyrose';
});


var themeTwo = document.querySelector('body');
var themeTwoBtn = document.querySelector('.theme-two');

themeTwoBtn.addEventListener('click', function(){
  themeTwo.style.background = 'green';
});



var themeThree = document.querySelector('body');
var themeThreeBtn = document.querySelector('.theme-three');

themeThreeBtn.addEventListener('click', function(){
  themeThree.style.background = 'yellow';
});



var themeFour = document.querySelector('body');
var themeFourBtn = document.querySelector('.theme-four');

themeFourBtn.addEventListener('click', function(){
  themeFour.style.background = 'mintcream';
  //document.body.style.background = 'orange'; or can do this
});




var themOne = document.querySelector
// them switcher to work, clicking in the box should update background color.
