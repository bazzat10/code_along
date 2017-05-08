// require dependency

var pgp = require('pg-promise')();

// database settings setup to get a connetion

var db = pgp({
  host: 'localhost',
  port: 5432,
  database: 'emergency_app'
});

// get some data with sql

db.none("INSERT INTO compliments (body) VALUES('you are doing ok')");
