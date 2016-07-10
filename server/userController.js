var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./user.js');


module.exports = {
    register: function(req, res, next) {
        User.create(req.body, function(err, result) {
            if (err) return res.status(500).send(err);
            newUser = result.toObject();
            delete newUser.password;
            res.status(200).json(newUser);
        });
    },
    // create: function(req, res, next) {
    //     User.create(req.body, function(err, response) {
    //         if (err) {
    //             res.status(500).json(err);
    //         } else {
    //             res.status(200).json(response);
    //         };
    //         res.redirect('/users/' + req.user.username);
    //     });
    // },
    // show: function(req, res, next) {
    //     Product.findById(req.params.id, function(err, response) {
    //         if (err) {
    //             res.status(500).json(err);
    //         } else res.status(200).json(response);
    //     });
    // },
    read: function(req, res, next) {
        User.find(req.query, function(err, result) {
          if (err) return res.status(500).send(err);
          for (var i = 0; i < result.length; i++) {
            delete result[i].password;
          }
          res.status(200).send(result);
        });
      },


    // create: function(req, res) {
    //     var newUser = new User(req.body);
    //     newUser.provider = 'local';
    //
    //     newUser.save(function(err) {
    //         if (err) return res.status(400).json(err);
    //
    //         req.logIn(newUser, function(err) {
    //             if (err) return next(err);
    //
    //             return res.json(req.user);
    //         });
    //     });
    // },

    // login: function (req, res, next) {
    //   passport.authenticate('local', function(err, user, info) {
    //     var error = err || info;
    //     if (error) return res.status(401).json(error);
    //
    //     req.logIn(user, function(err) {
    //
    //       if (err) return res.send(err);
    //       res.status(200).json(req.user);
    //     });
    //   })(req, res, next);
    // },
    logout: function(req, res) {
        req.logout();
        res.redirect('/');
    },
    me: function(req, res, next) {
      if (!req.user) return res.status(401).send('current user not defined');
        req.user.password = null;
        return res.status(200).json(req.user);
  },
//     update: function(req, res, next) {
//       User.findByIdAndUpdate(req.params._id, req.body, function(err, result) {
//         if (err) next(err);
//         res.status(200).send('user updated');
//   });
// }

};
