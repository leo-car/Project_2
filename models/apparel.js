const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const apparelSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: String, required: false },
    sold: { type: Boolean, default:true }
  }, {
      timestamps: true
     });
  
  module.exports = mongoose.model('Apparel', apparelSchema), apparelSchema;