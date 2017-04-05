console.log('JS connected .....')

var quotes = [new Quote({ // dish = Dish.new
  body: 'too easy',
  author: 'kevin'
})];

quotes.forEach(function(quote) {
  var view = new QuoteItemView({ model: quote }); // creats view instances(object) -- which has access to the model// sending teh quote object to the model
  $('#app').append(view.render().el); // .render() show to page // .el top level element // calls the function .render()
 // view is this!!!!!!!
});
