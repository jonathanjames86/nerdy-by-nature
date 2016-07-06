var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var controller = require('./controller.js');

var app = express();
var port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
mongoose.connect('mongodb://localhost/nerdy', function(err){
  if (err) console.log(err);
});


app.post('/nerdy/products', controller.create);
app.get('/nerdy/products', controller.index);
app.get('/nerdy/products/:id', controller.show);
app.put('/nerdy/products:id', controller.update);
app.delete('/nerdy/products/:id', controller.destroy);



app.listen(port, function(){
  console.log("Started on nerdy port" , port);
});
