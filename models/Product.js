const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

mongoose.model('Product', productSchema);