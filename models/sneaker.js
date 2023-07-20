const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
    Shoes: {
    Name: String,
    Brand: String,
    Size: Number,
    Sold: Boolean
    }
    
  });
  
  module.exports = mongoose.model('Sneaker', sneakerSchema), sneakerSchema;