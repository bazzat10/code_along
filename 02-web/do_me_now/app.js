console.log('javascript');

var firstTodo = document.querySelector('.line-across');
var list = document.querySelector('.line-across');

//
// list.addEventListener('click', function(){
//
//   if(event.target.tagName === 'LINE-ACROSS') {
//     event.target.className =
//   }
//   // cross out if only its a list item.
//
//
// });

//document.querySelector('.line-across').addEventListener('click', function(){
  // document.querySelector('.line-across').style.textDecoration = 'line-through';
  // document.querySelector('.line-across').style.color = 'grey';

//  firstTodo.className = 'completed';

//  document.querySelector('.line-across').className = 'completed';





//});


//search for button
//buttong listen on click
// grab value from input
//create new dom element - specially a new list item with teh contents from the input

document.querySelector('.btn').addEventListener('click', function(){
 var newListItem = document.createElement('li');
 newListItem.textContent = document.querySelector('.inpt').value;
 list.appendChild(newListItem);
});



// ALFONSO down below

console.log('apps');

// document.querySelector('li').addEventListener('click', function() {
//   document.querySelector('li').className = 'completed';
// });

// function applied to parent element will affect its child element.
document.querySelector('ul').addEventListener('click', function(event){
// cross out if the user clicked on a list item
  if  (event.target.tagName === 'LI') {
    event.target.className = 'completed';
  }
});

//search for button
// button listen on click
// grab value from input
// create a new dom element - specially a new list item with the contents from the input
//

document.querySelector('button').addEventListener('click', function() {
  var newListItem = document.createElement('li');
  newListItem.textContent = document.querySelector('input').value;
  document.querySelector('ul').appendChild(newListItem);
  document.querySelector('input').value = '';
});

document.querySelector('input').addEventListener('keypress', function(event) {
  if (event.which == 13 || event.keyCode == 13) {
    debugger;
    var newListItem = document.createElement('li');
    newListItem.textContent = document.querySelector('input').value;
    document.querySelector('ul').appendChild(newListItem);
    document.querySelector('input').value = '';
    return false;
  }
  return true;
});



var addClass = function(element, className){
  element.className += ('' + className);
};


// <div class="one two three"></div>
// removeClass(elem, 'two')
// div class=""></div>
var removeClass = function(element, className){
  element.className.split('').filter(function(item)){
      if(item === className){
        return true;
      };
  };
};


//filter



['one','two','three'].filter(function(){new Promise(function(){
  return true.
}
