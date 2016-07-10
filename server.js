var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var session = require('express-session');
var productController = require('./productController.js');
var User = require('./server/user.js');
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



//
//
// passport.use('local', new LocalStrategy(
//     function(email, password, done) {
//         console.log('two');
//         User.findOne({
//             email: email
//         }, function(err, user) {
//             console.log('three');
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, {
//                     message: 'Incorrect username.'
//                 });
//             }
//             if (user.password !== password) {
//                 return done(null, false, {
//                     message: 'Incorrect password.'
//                 });
//             }
//             return done(null, user);
//         });
//     }));

// passport.use('signup', new LocalStrategy({
//         usernameField: 'email',
//         passwordField: 'password',
//         passReqToCallback: true
//     },
//     function(req, email, password, done) {
//         process.nextTick(function() {
//             User.findOne({
//                 'local.email': email
//             }, function(err, user) {
//                 if (err) return done(err);
//                 if (user) {
//                     return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
//                 } else {
//                     var newUser = new User();
//
//                     // set the user's local credentials
//                     newUser.local.email = email;
//                     newUser.local.password = newUser.generateHash(password);
//
//                     // save the user
//                     newUser.save(function(err) {
//                         if (err)
//                             throw err;
//                         return done(null, newUser);
//                     });
//                 }
//
//             });
//
//         });
//
//     }));

// }

//Passport Endpoints// Passport Endpoints
app.post('/login', passport.authenticate('local', {
  successRedirect: '/me'
}));
app.get('/logout', function(req, res, next) {
  req.logout();
  return res.status(200).send('logged out');
});




// Products Endpoints


// app.post('/nerdy/products', productController.create);
app.get('/nerdy/products', productController.read);
// app.get('/nerdy/products/:id', productController.show);
// app.put('/nerdy/products:id', productController.update);
// app.delete('/nerdy/products/:id', productController.destroy);


//User Endpoints
// app.get('api/noUser', isAuthed, userController.noUser);
// app.post('/api/newUser', userController.register);
// app.get('/api/getUser/:id', userController.show);
// app.post('/login', passport.authenticate('local', {
//     successRedirect: '/'
// }));
// app.get('/logout', function(req, res, next) {
//     req.logout();
//     return res.status(200).send('logged out');
// });
app.post('/api/user/addUser', userController.register);
app.get('/api/user/login', userController.read);

app.get('/me', isAuthed, userController.me);



//
//
// app.put('/api/addToCart/:id', function(req, res, next) {
//     User.findByIdAndUpdate(req.params.id, {
//         $push: {
//             cart: req.body
//         }
//     }, function(err, r) {
//         if (err) res.status(500).json(err);
//         else {
//             User.findById(req.params.id).populate("cart").exec(function(err, user) {
//                 if (err) {
//                     res.status(500).json(err);
//                 } else {
//                     res.status(200).json(user.cart);
//                 }
//             })
//
//         }
//     });
//
// });





app.listen(port, function() {
    console.log("Started on nerdy port", port);
});
