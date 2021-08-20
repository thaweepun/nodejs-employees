const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConnect = require("./database/db");

// Connecting MongoDB Database
dbConnect;

//Express Sub Route
const employeesRoute = require("./routes/employees.route");

// Connecting Express Main Route
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
app.use(cors());
app.use("/employees", employeesRoute);

//PORT
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log("Server connect to port:" + PORT);
});

//404 Error
app.use((req, res, next) => {
    next(createError(404));
  });
  
//Error handler
app.use(function (err, req, res, next) {
    console.log("Error handler ::" + err.message);
  
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
  