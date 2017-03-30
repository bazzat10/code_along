console.log('JS connected .....')

var QuoteItemView = Backbone.View.extend({// NESTED OBJECTS

  template: Handlebars.compile( $('#quote-item-template').html()),

  events: {
    'click': 'markAsDone'
  },

  markAsDone: function() {
      this.$el.find('p').css('text-decoration', 'line-through');
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

var quotes = [{
  body: 'cake',
  desc: 'more cake'
}, {
  body: 'pudding',
  desc: 'more pudding'
}, {
  body: 'nap',
  desc: 'more nap'
}];

quotes.forEach(function(quote){

  var view = new QuoteItemView({ model: quote });
  view.render();
  $('#app').append(view.el);

});
