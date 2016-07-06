var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Schema is a blueprint and provides gaurdrails for you
module.exports =  mongoose.Schema ({
  products: [{
    item: {type: String, required:true, ref: "Product"},//ref will return an _id
    quantity: {type: Number, min:1}
  }]
});
//
module.exports = mongoose.model("cart", cartSchema);
