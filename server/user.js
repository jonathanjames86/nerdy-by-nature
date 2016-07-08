var mongoose = require('mongoose');
var passportLocal = require('passport-local');
var Schema = mongoose.Schema;
var cartSchema = require('./cart.js');

var userSchema = new Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  cart: [{type: String, ref: 'Product'}]
});

module.exports = mongoose.model('User', userSchema);

//
//
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));
