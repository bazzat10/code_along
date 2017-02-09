console.log('guessing the number game');

randomNumber = Math.floor((Math.random() * 10) + 1);  //this will create a random number between 1 and 10
var number;

while (number != randomNumber) {
  number = prompt('Guess a number between 1 - 10');

    if (number < randomNumber) {
      alert ('Incorrect! Try Again: Hint: Guess Higher'); // If input number is lower advise user to guess higher
    } else {
       if (number > randomNumber) {
        alert ('Incorrect! Try Again: Hint: Guess Lower');
      };// if input is higher than random number advised user to guess lower
    };


};

alert ('congratulations - you have guessed the correct number');

console.log(randomNumber);
