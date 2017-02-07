console.log('intrduction to ecamscript');

if(5>4){
  console.log('math is so easy');
};

var fullSlack = true;
if (fullSlack){
  console.log('yay full slack');
};

// truth or falsey

var name = '';
if (name){
  console.log('hello' + name);
};

var points = 0;
if (points){
  console.log('you have  ' + points + 'points');
};

var firstname;
if (firstname) {
  console.log('you firstname is ' + firstname);

};


var d = new Date("July 21, 1983 01:15:00");
var year = d.getFullYear();

if (year === 2015) {
 console.log("I'm in the present");
} else {
 if (year < 2015) {
  console.log('Whoa! Blast from the past!');
 } else {
  console.log('Greetings from the future');
 };
};
