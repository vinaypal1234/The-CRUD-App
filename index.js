const express = require("express");

//cors
const cors = require("cors");

// database connection
require("./database/dbconnection");

// environment variables
const port = process.env.PORT || 4000;

// creating instance
const app = express();

// routes
// default route
const defaultRoute = require("./routes/defaultRoute");
// register route
const registerRoute = require("./routes/registerRoute");
// student data rouet
const employeeDataRoute = require("./routes/employeeDataRoute");

// middleware to reac json data
app.use(express.json());

// middleware to read url encoded data
app.use(express.urlencoded());

// middleware cors
app.use(cors());

// setting view engine
app.set("view engine", "ejs");

// setting public files
app.use(express.static("./public"));

// using routes here
app.use(defaultRoute);
app.use("/register", registerRoute);
app.use("/employeeData", employeeDataRoute);

// // routes
// // register student

// // get student data
// app.get("/getStudentData/:page", (req, res) => {
//   const limit = 10;
//   const offset = (req.params.page - 1) * limit;
//   con.query(
//     `select * from student_data limit ${limit} offset ${offset} `,
//     function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     }
//   );
// });

// // delete student
// app.delete("/deleteStudent/:id", (req, res) => {
//   con.query(
//     `DELETE FROM student_data WHERE id=${req.params.id}`,
//     function (err) {
//       if (err) throw err;
//       res.send("Data Deleted Successfully");
//     }
//   );
// });

// // get single student
// app.get("/getSingleStudent/:id", (req, res) => {
//   // console.log(req.params.id)
//   con.query(
//     `select * from student_data WHERE id=${req.params.id} `,
//     function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     }
//   );
// });

// // update student
// app.post("/updateStudent/:id", (req, res) => {
//   const { fname, lname, email, number } = req.body;
//   con.query(
//     `UPDATE student_data SET fname = '${fname}', lname = '${lname}',email='${email}', number=${number} WHERE id=${req.params.id}`,
//     function (err) {
//       if (err) throw err;
//       res.send("Student Updated");
//     }
//   );
// });

//
app.listen(port, () => {
  console.log("Server Started");
});
