/*
*
* File Name : app.js is entry point of server side script
* Express Framework : Express is Node.js web application framework that
* provides a robust set of features to develop web and mobile applications.
* BodyParser : Node JS middleware to handle json data
*
*/

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

/*
*
* Description : get word count from sentence
* Get method : app.get('url' , function(request , reponse))
* params_in : url , callback function uses request and response objects
*
*/

app.get('/api/wordcount/:sentence',function(request , response){
	  var sentence = request.params.sentence;
    var word_count = 0;
    var words = sentence
              .replace(/[.,?!;()"'-]/g, '')
              .replace(/\s+/g, ' ')
              .toLowerCase()
              .split(' ');
    word_count = words.length;
    response.json(word_count);
});

app.listen(3000);
console.log("Running on port 3000");
