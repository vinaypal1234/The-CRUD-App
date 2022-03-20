const router = require("express").Router();
const { registerEmployee } = require("../controllers/registerController");

router.post("/registerEmployee", registerEmployee);

module.exports = router;
