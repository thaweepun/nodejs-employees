const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

//Student model
const employeesSchema = require("../models/employees.model");

//Get Data Students
router.route("/").get((req, res) => {
    employeesSchema.find((err, data) => {
        if (err) return next(err)
        else {
            console.log("Read Employees :: " + data);  
            res.json(data)
        }
    })
})

//Get single employees
router.route("/edit-employees/:id").get((req, res) => {
    employeesSchema.findById(req.params.id, (error, data) => {
      if (error) return next(error);
      else {
        console.log("Get single Employees :: " + data);
        res.json(data);
      }
    });
  });

module.exports = router;