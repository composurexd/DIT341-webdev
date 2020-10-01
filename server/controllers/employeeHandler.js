var mongoose = require('mongoose');
const express = require("express");
const Employee = require("../models/employee");
const Company  = require("../models/company");
const Trip     = require("../models/trip");

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

router.post('/:id/trip', function(req, res, next){
    var id = req.params.id;
    Employee.findById(id).populate('trip').exec(function(err, employee){
        if (err) { return next(err); }
        if (employee === null) {
            return res.status(404).json({'message': 'employee not found'});
        };
        var trip = new Trip(req.body);
        trip.save();
        employee.trips.push(trip);
        employee.save();
        res.status(201).json(trip);
    });
});

router.post('/:id/company', function(req, res, next){
    var id = req.params.id;
    Employee.findById(id).populate('company').exec(function(err, employee){
        if (err) { return next(err); }
        if (employee === null) {
            return res.status(404).json({'message': 'employee not found'});
        };
        var company = new Company(req.body);
        company.save();
        employee.companys.push(company);
        employee.save();
        res.status(201).json(company);
    });
});

router.get('/', function(req, res, next) { //TODO FIX THIS SHIT res.json({"employees": employees});)
    Employee.find(function(err, employees) {
        if (err) { return next(err); }
        res.status(200).json({"employees": employees});
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
    Employee.findById(id, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        if (req.body.fname)     {employee.fname = req.body.fname;}
        if (req.body.lname)     {employee.lname = req.body.lname;}
        if (req.body.birthday)  {employee.birthday = req.body.birthday;}
        if (req.body.userName)  {employee.userName = req.body.userName;}
        if (req.body.userPass)  {employee.userPass = req.body.userPass;}
        if (req.body.company)   {employee.company = req.body.company;}
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





