console.log('JAVASCRIPT working for functions 2');

var addTwoNumbers = function(num1, num2){
  return num1 + num2;
};

//console.log(addTwoNumbers(2,3));
 var awesomeObject = {};
 awesomeObject.owner = 'me';
 awesomeObject.addTwoNumbers = addTwoNumbers;

var bam = function(){
  console.log('bam');
};

setTimeout(bam, 5000);
