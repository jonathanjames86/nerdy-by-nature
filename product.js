var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//BluePrint for your model
var productSchema = new Schema({
  name: {
    type: String,
    required: true,
    Unique: true,
    index: true
  },
  price: {
    type: Number,
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
  type: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required : true
  },
  genre: {
    type: String,
    required : true
  }


});

module.exports = mongoose.model('Product', productSchema);
