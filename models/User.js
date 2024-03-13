const mongoose = require("mongoose");

// Define the schema for the Heart collection
const heartSchema = new mongoose.Schema({
  Age: String,
  Sex: String,
  Cp: String,
  Trestbds: String,
  Chol: String,
  Fbs: String,
  Restecg: String,
  Thalach: String,
  Exang: String,
  Oldpeak: String,
  Slope: String,
  Ca: String,
  Thal: String,
});

// Create the Heart model using the schema

module.exports = mongoose.model("User", heartSchema);
