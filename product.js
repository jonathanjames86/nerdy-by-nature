var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//BluePrint for your model
var productSchema = new Schema({
  name: {
    type: String,
    required: true,
    Unique: true,
    Index: true
  },
  price: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: String,

});

module.exports = mongoose.model('Product', productSchema);
