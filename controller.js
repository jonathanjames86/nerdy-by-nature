var mongoose = require('mongoose');
var Product = require('./product.js');

module.exports = {
  /// products: {
        index: function(req, res, next) {
            Product.find({}, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else res.status(200).json(response);
                });
              },
        show: function(req, res, next) {
            Product.findById(req.params.id, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else res.status(200).json(response);
                });
              },
        create: function(req, res, next) {
            Product.create(req.body, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(response);
                }
                });
              },
        update: function(req, res, next) {
            if (req.params.id) {
                return res.status(400).json('Need a search');
            } //OPTIONS
            Product.update({
                _id: req.params.id
            }, req.body, {
                new: true,
                upsert: true
            }, function(err, response) {
                if (err) {
                    return res.status(500).json(err);
                } else {
                    res.status(200).json(response);
                }
              });
              },
        destroy: function(req, res) {

            if (!req.params.id) {
                return res.status(400).send('id query needed');
            }
            Product.remove(req.params.id, function(err, response) {
                if (err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(response);
                }
            });
        }

      // }

    };
