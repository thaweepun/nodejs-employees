const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeesSchema = new Schema(
    {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
    },
    {
      collation: "employees",
    }
  );
  
  module.exports = mongoose.model("Employees", employeesSchema);