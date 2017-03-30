console.log('JS connected');

// accepts an array
// randomly selects an elem and return that elem
// sample(arr)

var list = [2,4,6,8];

var sample = function (list) {
  var index = Math.floor(Math.random() * list.length); // chooses randmon number
  return (list[index]);

};

console.log(sample(list));


var each = function(arr, func){
  for (var index=0; index<arr.length; index++){
    func(arr[index]);  // passed in function and can call it inside of another function. // referring to the function being passed on. 
  };
};


var doSomething = function(x){
  var result = x*2;
  console.log(result);
};

each(list, doSomething)

// for each element inside the array you want to apply the function to it.
// the func has a signature
//function(elem){
//
//}
// each(arr, func)


//Fullslack.sample(); // these are objects
//Fullslack.each(); // these are objects

var Fullslack = {
 each: each
}


Fullslack.author = 'wdi11'
Fullslack.sample = sample;

debugger;
