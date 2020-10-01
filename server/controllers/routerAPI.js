const companies = require("./companies");
const employees = require("./employees");
const trips = require("./trips");
const expenses = require("./expenses");
const express = require("express");

const router = express.Router();

router.use("/company",companies);
router.use("/employee",employees);
router.use("/expense",expenses);
router.use("/trip",trips);

module.exports = router;














