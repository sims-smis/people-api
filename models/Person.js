const mongoose = require('mongoose');

// Define the person schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },  
  age: { type: Number, required: true },   
  gender: { type: String, required: true }, 
  mobile: { type: String, required: true } 
});


module.exports = mongoose.model('Person', personSchema);
