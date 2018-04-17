var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/api/wordcount/:sentence',function(request , response){
	  var sentence = request.params.sentence;
    var index = 0;

    var words = sentence
              .replace(/[.,?!;()"'-]/g, '')
              .replace(/\s+/g, ' ')
              .toLowerCase()
              .split(' ');

    index = words.length;
    response.json(index);
});

app.listen(3000);
console.log("Running on port 3000");
