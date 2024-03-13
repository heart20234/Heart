require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();

const User = require("./models/User"); // Corrected model import

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.post("/", async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await User.create(newUser); // Changed HeartModel to User
    res.json({ user: createdUser });
  } catch (error) {
    console.error("Error adding user", error);
    res.status(500).send("Error adding user");
  }
});

mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
