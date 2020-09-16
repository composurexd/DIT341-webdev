const { Mongoose } = require("mongoose");

function addEmployee(fname,lname,bDay,userName,userPass,company){
    
    //create new instance of employee
    var newEmployee = new server/models.Employee({
        fname: fname,
        lname: lname,
        birthday:  bDay,
        userName: userName,
        userPass: userPass,
        companyName: company
    });
    //save instance of employee
    newEmployee.save(function(err){
        if(err)
            {return console.log(err);}
        console.log("saved!");
    });
};

const express = require("express");
const employee = require("../models/employee");
//const {Employee} = require("../models/employee");
const company = require("../models/company");
const app = require("../app");

const router = new express.Router();


//create new user
router.post("/employee",function(req,res){
    var employee = new Employee(req.body);
    employee.save(function(err){
        if(err)
            {return console.log(err);}
        res.status(201).json(employee);
    })
});


module.exports = router;





