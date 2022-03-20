const dbConnection = require("../database/dbconnection");

const registerEmployee = (req, res) => {
  const { fullname, email, phone } = req.body;
  dbConnection.query(
    `INSERT INTO employee_data (fullname, email,phone) VALUES ('${fullname}', '${email}',${phone})`,
    function (err) {
      if (err) throw err;
      res.status(200).json({ message: "Form Submitted" });
    }
  );
};

module.exports = { registerEmployee };
