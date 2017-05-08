var fs = require ('fs');


// callback has a signature, you get err and data passed in
// pass you the error first


var callback = function(err, data) {
  if err {
    // help scream
  };

  // all good you get the datas

  var lineCount = data.toString().split('\n').length;
  console.log(lineCount);
};


// expecting a filename be passed in through the command line
fs.readFile(process.argv[2], callback);
// file = file.read(argv[2]);

// node everything is async by default
// fs.readFile(filename, callback)
// .on('click', callback)
// .addEventListener('click', callback)
// .setTimeout(callback, millisecs)
//
