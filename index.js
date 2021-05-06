var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 5000

const buildPath = path.resolve(__dirname, '/');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));

  console.log('DATABASE_URL: ' + DATABASE_URL);
  pg.defaults.ssl = true;
  pg.connect(process.env.DATABASE_URL, function(err, client) {
      if (err) throw err;
      console.log('Connected to postgres! Getting schemas...');
      client.query('SELECT table_schema,table_name FROM information_schema.tables;').on('row', function(row) {
      console.log(JSON.stringify(row));
      });
  });
});

app.listen(PORT);
