console.log('Fancy UI')
$.ajax ({
  url: 'http://localhost:3000/api/dishes'
}).done(function(response){
  console.log('yay');
  // console.log(response);
  response.forEach(function(dish){
    var $header = $('<header>').text('DT').append($('<span>').text('13hr')).append($('<img>'));
    var $contentImage = $('<img>').addClass('avatar').attr('src', 'https://placeholdit.imgix.net/~text?txtsize=75&amp;txt=800%C3%97800&amp;w=800&amp;h=800'); // to do

    var $contentName = $('<div>').addClass('content');
    $contentName.append( $('<h2>').text(dish.name) );
    $contentName.append( $('<h4>').text('at GA') );

    var $footer = $('<span>').addClass('likes-count right');

    var $card = $('<div>').addClass('ui-card');

    $card.append( $header );
    $card.append( $contentImage );
    $card.append( $contentName );
    $card.append( $footer );

    $('#app').append( $card );


        // $('#app').append($('<div>').addClass('ui-card'));
    // $('#app').append($('<header>').addClass('content'));
    // $('header').append($('<span>').addClass('right'));
    // $('header').append($('<img>').addClass('avatar'));
    //
    // var name = $("<h2>").text(dish.name);
    // $("#app").append(name);
  });
}).fail(function(){
  console.log('oh noo');
});
//
// <div class="ui-card" data-id="<%=dish.id%>">
//   <header class="content">
//     <span class="right">13h</span>
//     <img class="avatar" src="https://placeholdit.imgix.net/~text?txtsize=75&txt=800%C3%97800&w=800&h=800" alt=""> DT
//   </header>
//
//   <div class="image">
//     <img src="<%=dish.image_url%>" alt="">
//     <span class="star">&#9733</span>
//   </div>
//
//   <div class="content">
//     <h2>cakepudding</h2>
//     <h4>at GA</h4>
//   </div>
//
//   <div class="content">
//     <span class="likes-count right"><%=dish.likes.count%></span>
//     <span>
//       <%= form_tag '/likes', method: 'post' do%>
//         <input type="hidden" name="dish_id" value="<%=dish.id%>">
//         <button>like</button>
//       <% end %>
//     </span>
//   </div>
//
// </div>
