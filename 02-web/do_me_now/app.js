console.log('javascript');

var firstTodo = document.querySelector('.line-across');
var list = document.querySelector('.line-across');


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
