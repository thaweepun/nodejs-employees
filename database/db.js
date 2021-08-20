const mongoose = require("mongoose");

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/bangkok", {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database successfully connected.");
    },
    (error) => {
      console.log("Could not connect to database:" + error);
    }
);

module.exports = mongoose;