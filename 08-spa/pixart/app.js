console.log('JS connected..')

var brushes = [];

var $canvas = $('.canvas');

for (var count=0; count < 2000; count++){
  $('<div>').addClass('square').appendTo($canvas); //append is bloody slow
};

$canvas.on('mouseover', '.square', function(event){ // jQuery filters with with class.
  $(event.target).css('background-color', brushes[0]); // jquery library

});

$('.color-btn').on('click', function(){
  brushes.unshift($('.color-input').val());

  $('.brush').eq(0).css('background-color', brushes[0]);
  $('.brush').eq(1).css('background-color', brushes[1]);
  $('.brush').eq(2).css('background-color', brushes[2]);
});

$('.brush').on('click', function(){
  brushes.unshift(event.target.style.backgroundColor) // unshift methods adds to array on the starting from the first index
  // console.log(event.target.style.backgroundColor);
    $('.brush').eq(0).css('background-color', brushes[0]);
    $('.brush').eq(1).css('background-color', brushes[1]);
    $('.brush').eq(2).css('background-color', brushes[2]);
});
