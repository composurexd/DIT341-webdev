const companies = require("./companies");
const employees = require("./employees");
const trips = require("./trips");
const expenses = require("./expenses");
const express = require("express");

const router = express.Router();

router.use("/companies",companies);
router.use("/employees",employees);
router.use("/expenses",expenses);
router.use("/trips",trips);

module.exports = router;














