var mongoose = require('mongoose');
const express = require("express");
const Employee = require("../models/employee");
const Company = require("../models/company");
const app = require("../app");

const router = new express.Router();


//create new user
router.post("/",function(req,res,next){
    var employee = new Employee(req.body);
    employee.save(function(err){
        if(err)
            {return console.log(err);}
        res.status(201).json(employee);
    })

});
router.get('/', function(req, res, next) {
    Employee.find(function(err, employees) {
        if (err) { return next(err); }
        res.json({"employees": employees});
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Employee.findById(req.params.id, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        res.json(employee);
    });
});

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Employee.findById(id, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        employee.fname = req.body.fname;
        employee.lname = req.body.lname;
        employee.birthday = req.body.birthday;
        employee.userName = req.body.userName;
        employee.userPass = req.body.userPass;
        employee.company = req.body.company;
        employee.save();
        res.json(employee);
    });
});

// Partially update the employee with the given ID
router.patch('/:id', function(req, res, next) {
    var id = req.params.id;
    Employee.findById(id, function(err, camel) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        employee.fname = req.body.fname;
        employee.lname = req.body.lname;
        employee.birthday = req.body.birthday;
        employee.userName = req.body.userName;
        employee.userPass = req.body.userPass;
        employee.company = req.body.company;
        employee.save();
        res.json(employee);
    });
});

// Delete the Employee with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Employee.findOneAndDelete({_id: id}, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        res.json(employee);
    });
});

// Delete all employees
router.delete('/', function(req, res, next) {
    Employee.deleteMany({}, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        res.json(employee);
    });
});



module.exports = router;





