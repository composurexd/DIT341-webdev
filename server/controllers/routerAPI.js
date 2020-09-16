const companyHandler = require("./companyHandler");
const employeeHandler = require("./employeeHandler");
const expenceHandler = require("./expenceHandler");
const tripHandler = require("./tripsHandler");
const express = require("express");

const router = express.Router();

//router.use("/company",companyHandler);
router.use("/employee",employeeHandler);
//router.use("/expence",expenceHandler);
//router.use("/trip",tripHandler);

module.exports = router;














