console.log('JS connected .....')

var QuoteItemView = Backbone.View.extend({// NESTED OBJECTS

  template: Handlebars.compile( $('#quote-item-template').html()),

  events: {
    'click p': 'markAsDone', // pinpoinjt to click on just the paragraph
    'click h2': 'changeBackgroundColor'
  },

  markAsDone: function() {
      this.$el.find('p').css('text-decoration', 'line-through');
  },

  changeBackgroundColor: function() {
      this.$el.find('h2').css('background-color', 'mistyrose');
  },


  render: function(){
    var html = this.template(this.model);
    // var source = $('#quote-item-template').html();
    // // this.$el.html('<p>fullslack</p>');
    // this.$el.html('<p>' + this.model.body + '</p>');
    // var template = Handlebars.compile(source);
    // var html = template(this.model);
    this.$el.html(html);
  }


});

// for (var i= 0; i<3; i++){
//   var view = new QuoteItemView();
//   view.render();
//   $('body').append(view.el);
// };


$.ajax ({
  url: 'http://omdbapi.com/?s=jaws' // http://localhost:3001/api/dishes/
}).done(function(res){

  var movies = res.Search;

  movies.forEach(function(movie){

    var view = new QuoteItemView({ model: movie }); // MODEL is the name of the
    view.render();
    $('#app').append(view.el);

  });
})
