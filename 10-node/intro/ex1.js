// console.log(process.argv);
//
// console.log(process.argv[2]);
//
// console.log(process.argv.length);

// cli program to sum numbers

var total = 0;

for (var index = 2; index<process.argv.length; index++ ) {

      total += parseInt(process.argv[index]); // convert to number

};

console.log(total);
