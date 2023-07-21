const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    default: 5
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

const sneakerSchema = new Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true},
    size: {type: Number},
    sold: { type: Boolean, default:true },
    reviews: [reviewSchema]
  }, {
      timestamps: true
     });
  
  module.exports = mongoose.model('Sneaker', sneakerSchema), sneakerSchema;