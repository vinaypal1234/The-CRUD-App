const router = require("express").Router();
const {
  employeeData,
  deleteEmployee,
  singleEmployee,
  editEmployee,
} = require("../controllers/employeeDataController");

router.get("/", employeeData);

router.delete("/delete/:id", deleteEmployee);

router.get("/single/:id", singleEmployee);

router.post("/edit/:id", editEmployee);

module.exports = router;
