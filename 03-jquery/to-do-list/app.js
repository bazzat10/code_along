console.log('javascript to do list');


// searching
// dollar is naming convention
// help you remeber its a jquery object

var $toDo = $('.to-do'); // querySelector
var $done = $('.done');


// attached even listener

$toDo.on('click', 'li', function(event){ // listens to an event under class name toDo list with li
  //event.target.className = 'completed';
  //event target is a dom element;
  //$(event.target) return the elem as a jquery object
  //


  //$(event.target).toggleClass('completed');
//  $(event.target).detach();
//  $done.append($(event.target));

  var itemText = $(event.target).text();
  // var $newListItem = $('<li>' + itemText + '</li');
  var $newListItem = $('<li>')
    .text(itemText)
    .addClass('completed');
  $done.append($newListItem);
  $(event.target).remove();

});

$('button').on('click', function(){
  var inputValue = $('input').val(); // .value
  var $newListItem = $('<li>').text(inputValue); // creating new list item
  $toDo.append($newListItem);
});

$done.on('click', 'li', function(event){
//  $(event.target).detach();
  $toDo.append($(event.target));
});
// $('.to-do li').on('click', function(){
//   console.log('to do list click works');
// });
