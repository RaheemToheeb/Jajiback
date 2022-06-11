const mongoose = require("mongoose");
require("dotenv").config();
// const url = process.env.URL;
const atlas = process.env.ATLAS;

mongoose.connect(atlas).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;
