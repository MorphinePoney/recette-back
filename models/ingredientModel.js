const mongoose = require("mongoose");

const ingredientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  
});

const ingredient = mongoose.model("ingredient", ingredientSchema);
module.exports = ingredient;