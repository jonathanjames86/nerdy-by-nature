var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema is a blueprint and provides gaurdrails for you
var CartSchema = new Schema({
  owner: {type: String, ref: "User"},
  products: [{
    item: {type: String, ref: "Product"},//ref will return an _id
    quantity: {type: Number, min: 1}
  }]
});



module.exports = mongoose.model('Cart', CartSchema);
