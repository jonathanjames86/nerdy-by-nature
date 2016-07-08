var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var passportLocal = require('passport-local');
var controller = require('./controller.js');
var User = require('./server/user.js');


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
app.put('/api/addToCart/:id', function(req, res, next){
  User.findByIdAndUpdate(req.params.id, {$push: {cart: req.body}}, function(err, r){
    if (err) res.status(500).json(err);
    else{
      User.findById(req.params.id).populate("cart").exec(function(err, user){
        if (err){
          res.status(500).json(err);
        }else {
          res.status(200).json(user.cart);
        }
      })

    }
  });

});





app.listen(port, function(){
  console.log("Started on nerdy port" , port);
});
