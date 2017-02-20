console.log('javascript to do list');


// searching
// dollar is naming convention
// help you remeber its a jquery object

var $list = $('ul'); // querySelector


// attached even listener

$list.on('click', 'li', function(event){
  //event.target.className = 'completed';
  //event target is a dom element;
  //$(event.target) return the elem as a jquery object
  $(event.target).toggleClass('completed');
});

$('button').on('click', function(){
  var inputValue = $('input').val(); // .value
  var $newListItem = $('<li>').text(inputValue); // creating new list item
  $list.append($newListItem);
});
