const companyHandler = require("./companyHandler");
const employeeHandler = require("./employeeHandler");
const tripHandler = require("./tripHandler");
const expenseHandler = require("./expenseHandler");
const express = require("express");

const router = express.Router();

router.use("/company",companyHandler);
router.use("/employee",employeeHandler);
router.use("/expense",expenseHandler);
router.use("/trip",tripHandler);

module.exports = router;














