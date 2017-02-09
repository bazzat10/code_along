console.log('JAVASCRIPT working for functions');

var numberWeTellTheWorld = 500000; // outside varialble - can call on the console.

var launchMissile = function(){
  var numberOfMissiles = 0; // local variable - unable to call it in the console
  console.log('launch missile');
}

var hello = function(name){ // parameter
  console.log('hello' + name);
};

hello('fullslack'); // argument

// another way of creating function
function launchNuke(){
  console.log('launch nuke');
}


var doubleMe = function(number){
  return number * 2;

};

var calmYourself = function(string) {
  return string.toLowerCase().replace(/[^a-zA-Z ]/g, ""); // LOWER CASES the string and replaces/remove the symbol
  // or   return string.toLowerCase().split('!')[0];

};


var calculateAge = function(birthYear, currentYear){
 var age = currentYear - birthYear; /// calculates your ages
 console.log('Your Age is:' + age);
};

var lengths = function(string){
  var string_length = string.length; // returns lengths of the string argument pass my the function
  return string_length;
};

var transmogrifier = function(numb1, numb2, numb3){
  var num1_numb2 = numb1 * numb2;
  var result = Math.pow(num1_numb2,numb3);

  console.log(result);

  //console.log(numb1 + ',' + numb2 + ',' + numb3);
}; // a function accepsting three argument


var wordReverse = function(string){
 var stringLength = string.length
 var reversedString = '';
 for(var i=0; i<=string.length; i++){
  reversedString += string.charAt(stringLength);
  stringLength --;
  };

  return reversedString;
  // functions accepts an string argument and returns it as reversed

};
