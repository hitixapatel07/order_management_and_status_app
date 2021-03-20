const mongoose = require('./mongo');

// create a collection with schema 
const Order = new mongoose.Schema({
    
  name: String,
  address: String,
  email: String,
  phone: Number,
  product1: String,
  product2: String,
  //order_date: String
  order_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', Order);