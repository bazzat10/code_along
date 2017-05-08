console.log('JS Connected /....')

var Allergies = function (amount) {
  this.amount = amount;
}

Allergies.prototype.listOfAllergies = ['eggs', 'peanuts', 'shellfish', 'strawberries',
'tomatoes', 'chocolate', 'pollen', 'cats'];

Allergies.prototype.list = function(){ // this is referencing the object
  return this.listOfAllergies.filter(function(allergy, index){
    return Math.pow(2,index) & this.amount  // 2 to the power of index
  }, this)
};

// var Allergies.prototype = {
//   list: ['eggs', 'peanuts', 'shellfish', 'strawberries',
// 'tomatoes', 'chocolate', 'pollen', 'cats']
// };

var allergies = new Allergies(34);
console.log(allergies.list());
