console.log('JS Connected ...');

var hackers = [{
  name: 'alfons',
  isDangerous: true,
  hourlyRate: 23,
  taxRate: 0.6
}, {
  name: 'kelvin',
  isDangerous: false,
  hourlyRate: 25,
  taxRate: 0.5
}, {
  name: 'will',
  isDangerous: true,
  hourlyRate: 102,
  taxRate: 0.8
}, {
  name: 'helmi',
  isDangerous: false,
  hourlyRate: 99,
  taxRate: 0.7
}, {
  name: 'marta',
  isDangerous: false,
  hourlyRate: 350,
  taxRate: 0.5
}];

var average = 0;
var total = 0;
var num = 0;

for (var i in hackers){
  if (hackers[i].isDangerous){ // if (hackers[i].isDangerous === true)
    total += hackers[i].hourlyRate;
    num += 1;
  };
};

console.log(i);
average = total / num;

console.log('average dangerous hackers ' + average);

var realHourlyRateTotal = 0;
average = 0;
num = 0;

for (var i in hackers){
  if (hackers[i].isDangerous === false){
    realHourlyRateTotal += hackers[i].hourlyRate * (1 - hackers[i].taxRate);
    num += 1;
  };
};



average = realHourlyRateTotal / num;

console.log('average non-dangerous hackers ' + average);
