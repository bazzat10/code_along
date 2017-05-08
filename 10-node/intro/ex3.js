// cli program that counts lines in a file


// node ex3.js myLib.js
// 9

// standard library // the library needs to be assigned to a variable to be used.
var fs = require ('fs');

// buffer =  fs.readFileSync(filename)
// buffer.toString()
//


// buffer = fs.readFile('my-file.txt', 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
//     });

// console.log(buffer.toString());


var buffer = fs.readFileSync('myLib.js'); // 
var str = buffer.toString();

console.log(str.split('\n').length);
