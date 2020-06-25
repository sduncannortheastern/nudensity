var express = require('express');
var app = express();
var fs = require('fs');


var server = app.listen(process.env.PORT || 8099, function() {
    console.log('Listening on port %d', server.address().port)
});

app.get('/favorites', function(req, res) {
    fs.readFile('./data/favorites.dat', 'utf8', function(err, data) {
       if(err) {
          res.writeHead(500, {'Content-Type': 'application/json'});
          res.end(JSON.stringify({status: 500,
                                  message: "Error",
                                  detailed_message: err.message}));
       } else {
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(data); 
       }
  })
});


