var express = require('express');
var app = express();
var path = require('path');
// ----------------------------------------------------------------
console.log('DATABASE_URL: ' + DATABASE_URL);
var pg = require('pg');
// ----------------------------------------------------------------

const PORT = process.env.PORT || 5000

const buildPath = path.resolve(__dirname, '/');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));

  // ----------------------------------------------------------------
  pg.connect(process.env.DATABASE_URL, function(err, client) {
    var query = client.query('SELECT * FROM your_table');
    query.on('row', function(row) {
      console.log(JSON.stringify(row));
    });
  });
  // ----------------------------------------------------------------

});

app.listen(PORT);

