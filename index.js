var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

const PORT = process.env.PORT || 5000

const buildPath = path.resolve(__dirname, '/');

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// ------------------------------------------------------------------------
// app.post('/json', function (req, res) {
//   fs.writeFile(__dirname+"/my_post.json", req.body, function(err) {
//     if(err) {
//       console.log("Error: ");
//       return console.log(err);
//     }
//     res.send('The file was saved!');
//   }); 
// });
// ------------------------------------------------------------------------

app.listen(PORT);


// ----------------------------------------------------------------
// var pg = require('pg');
// console.log('DATABASE_URL: ' + DATABASE_URL);
// pg.connect(process.env.DATABASE_URL, function(err, client) {
//   var query = client.query('SELECT * FROM your_table');
//   query.on('row', function(row) {
//     console.log(JSON.stringify(row));
//   });
// });
// "pg": "^0.5.4"
// ----------------------------------------------------------------