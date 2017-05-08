var path = require('path');


// looks for entry filenames - starting point
// scan the content for requires and (imports)
// bundles everything to a destination you specify
// that bundled file is what you add with a script tag


const config = {
  entry: {
    app: './app' // if it hasn;t been provided a filename it will look for index.js
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 4000
  }
}


module.exports = config;