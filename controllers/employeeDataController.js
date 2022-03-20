const dbConnection = require("../database/dbconnection");

const employeeData = (req, res) => {
  dbConnection.query(
    `select * from employee_data`,
    function (err, employeeData) {
      if (err) throw err;
      res.status(200).render("employeeData", { employeeData: employeeData });
    }
  );
};

const deleteEmployee = (req, res) => {
  console.log(req.params.id);
  dbConnection.query(
    `delete from employee_data where id=${req.params.id}`,
    function (err) {
      if (err) throw err;
      res.status(200).json({ message: "Employee Deleted" });
    }
  );
};

const singleEmployee = (req, res) => {
  dbConnection.query(
    `select * from employee_data where id=${req.params.id}`,
    function (err, singleEmployeeData) {
      if (err) throw err;
      res.status(200).json(singleEmployeeData);
    }
  );
};

const editEmployee = (req, res) => {
  const { fullname, email, phone } = req.body;
  dbConnection.query(
    `update employee_data set fullname='${fullname}' , email='${email}' , phone=${phone} where id=${req.params.id}`,
    function (err) {
      if (err) throw err;
      res.status(200).json({ message: "Employee Updated" });
    }
  );
};

module.exports = {
  employeeData,
  deleteEmployee,
  singleEmployee,
  editEmployee,
};
