var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
// var passportLocal = require('passport-local');
var Schema = mongoose.Schema;
// var cartSchema = require('./cart.js');

var User = new Schema({
  name: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true, Unique: true},
  cart: [{type: String, ref: 'Product'}]
});

//-------------------BYCRYPT
User.pre('save', function(next) {
	var user = this;
	if (!user.isModified('password'))	return next();
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
  var user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);

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
