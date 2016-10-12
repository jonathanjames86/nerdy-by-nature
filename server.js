var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var productController = require('./productController.js');
var User = require('./server/user.js');
var Cart = require('./server/cart.js');
var userController = require('./server/userController.js');
var passport = require('./server/passport');
var config = require('./config');

var port = 3000;

mongoose.connect('mongodb://localhost/nerdy', function(err) {
    if (err) console.log(err);
});


var isAuthed = function(req, res, next) {
  if (!req.isAuthenticated()) return res.status(401).send();
  return next();
};
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
// app.use(cors());
// app.use(bodyParser.urlencoded( {extended: true} ));
app.use(session({
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


//Passport Endpoints// Passport Endpoints
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});

// Products Endpoints

app.get('/nerdy/products', productController.read);

app.post('/api/newUser', userController.register, passport.authenticate('local', {
  successRedirect: '/me'
}));


app.get('/me', isAuthed, userController.me);
app.put('/user/cart/', userController.updateCart);
app.get('/cart/getproducts', userController.readCart);

app.listen(port, function() {
    console.log("Started on nerdy port", port);
});

app.post('/nerdy/products', productController.create);
