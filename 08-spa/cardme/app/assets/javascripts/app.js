
console.log("JS Connected ... ");

function cardsIndex(){
  // get the data
  // use the template to render html
  // attach even handlers
  var apiUrl = '/api/cards';
  var indexTemplate = Handlebars.compile($('#index-template').html());
  var cardTemplate = Handlebars.compile($('#card-template').html());

  $.ajax({
    url: apiUrl,
    method: 'get'
  }).done(renderIndex);

  function renderIndex(cards) {
    // console.log(cards);

    var html = templateFunction();
    $('#app').html(html);

    cards.forEach(function(card){
      var html = cardTemplate(card);
      $('.wrapper').append(html);
    });

    $('.wrapper').on('click', '.delete-action', deleteCard);
  //  $('.wrapper').on(('click', '.edit-acdtion', editCard);
  //  $('.new-card-form').on('submit', createCard);

    function deleteCard(event){
      var id = $(this).closes('.card').data('id'); // 'this'is the same as event.target

      $.ajax({
        url: '/api/cards/' + id,
        method: 'delete'
      }).done(function(){
        $(event.target).closest('.card').remove();
      });

    };

  };

  $(document).ready(function() {
    cardsIndex();
  });
};

// $(document).ready(function(){
//   $('.new-card-form').on('submit', function(event) {
//    event.preventDefault();
//    console.log('new');
//    $.ajax({
//      url:  '/api/cards',
//      method: 'post',
//      data: { name: $('.new-card-name').val(),
//              image_url: $('.new-card-image_url').val()
//            }
//    }).done(function(card){
//      console.log('done creating a card');
//      var source = $('#card-template').html(); // gran the template string
//      var template = Handlebars.compile(source); // turn template string into a function
//      var html = template(card); // html with template merged together
//      $('.wrapper').append(html);
//    });
//   });
//
//   $.ajax({
//     url:'/api/cards' //do not need http: because it is the same computer
//   }).done(function(res){
//     var shuffleCards = _.shuffle(res);
//     console.log('done shuffling cards');
//     shuffleCards.forEach(function(card){
//       // console.log('done getting the cards');
//       var source = $('#card-template').html(); // gran the template string
//       var template = Handlebars.compile(source); // turn template string into a function
//       var html = template(card); // html with template merged together
//       $('.wrapper').append(html);
//     }); // ajax
//
//     $('.delete-action').on('click',function(event){
//       console.log('deleting');
//       var id = $(event.target).closest('.card').data('id');
//       $.ajax({
//         url: '/api/cards/' + id,
//         method: 'delete'
//
//       }).done(function(){
//         $(event.target).closest('.card').fadeOut(500, function() {
//           $(event.target).closest('.card').remove();
//         });
//
//       });
//     });
//   });
//
//   $('.wrapper').on('click', '.delete-action', function(event){
//     console.log('deleting');
//     var id = $(event.target).closest('.card').data('id');
//     $.ajax({
//       url: '/api/cards/' + id,
//       method: 'delete'
//
//     }).done(function(){
//       $(event.target).closest('.card').fadeOut(500, function() {
//         $(event.target).closest('.card').remove();
//       });
//
//     });
//   });
//
//   $('.wrapper').on('click', '.edit-action', function(event){
//     console.log('going to edit page');
//     var id = $(event.target).closest('.card').data('id');
//     console.log('id'+id)
//     $.ajax({
//       url: '/api/cards/' + id,
//       method: 'get',
//     }).done(function(card){
//       console.log('done .. in edit page')
//       $('.wrapper').remove();
//       var source = $('#edit-template').html();
//       var template = Handlebars.compile(source);
//       var html = template(card)
//       $('body').append(html);
//
//
//       $('.edit').on('click', function(event) {
//         console.log('editing');
//         var id = $(event.target).closest('.card').data('id');
//         console.log('id'+id)
//         $.ajax({
//           url: '/api/cards/' + id,
//           method: 'put',
//           data: { name: $('.edited-card-name').val(),
//                   image_url: $('.edited-card-image_url').val()
//                 }
//         }).done(function(card){
//           location.reload();
//           // var source = $('#card-template').html(); // gran the template string
//           // var template = Handlebars.compile(source); // turn template string into a function
//           // var html = template(card); // html with template merged together
//           // $('body').append(html);
//         });
//       });
//     });
//   });
// });


  // console.log('moving on' );
  // event listener not working becuase Ajax is continiously working, it is not done
  // so put inside of done function.
