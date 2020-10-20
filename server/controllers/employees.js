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
            {return next(err);}
        res.status(201).json(employee);
    })

});

router.post('/:id/trips', function(req, res, next){
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

router.post('/:id/companies', function(req, res, next){
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

router.get('/', function(req, res, next) { 
    Employee.find(function(err, employees) {
        if (err) { return next(err); }
        res.status(200).json({"employees": employees});
    });
});

router.get('/:id', function(req, res, next) {
    Employee.findById(req.params.id, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        res.json(employee);
    });
});

// filter all employees which belong to a company (returns employee[Object])
router.get('/companies/:id', function(req, res, next) {
    var cID = req.params.id; 
    Employee.find(function(err, employees) {
        if (err) { return next(err); }
        var filteredEmployees = [];
        for (var x=0; x<employees.length;x++){
            if(employees[x].companys == cID) // === identical / == same (even if one string the other int)
            filteredEmployees.push(employees[x]);
        }
        res.status(200).json({"employees": filteredEmployees});
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
        employee.userName = req.body.userName;
        employee.userPass = req.body.userPass;
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
        if (req.body.userName)  {employee.userName = req.body.userName;}
        if (req.body.userPass)  {employee.userPass = req.body.userPass;}
        if (req.body.companys)   {employee.companys = req.body.companys;}
        employee.save();
        res.json(employee);
    });
});

// Delete the Employee with the given ID -fixed also deletes pointer to employee
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Employee.findOneAndDelete({_id: id}, function(err, employee) {
        if (err) { return next(err); }
        if (employee == null) {
            return res.status(404).json({"message": "Employee not found"});
        }
        for (var x = 0; x < employee.trips.length; x++ ) {
            Trip.findOneAndDelete({_id: employee.trips[x]}, function(err, trip) {
                if (err) { return next(err); }
                if (trip == null) {
                   // return res.status(201).json({"message": "OK: No trip to delete"});
                }
            });
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

//DELETE expenseTRIP from tripEMPLOYEE
router.delete("/:employeeID/trips/:tripID", function(req,res,next){
    var employeeID = req.params.employeeID;
    var tripID = req.params.tripID;
    
    Employee.findByIdAndUpdate(employeeID, {$pull : {trips : tripID}}, function(err,employee){
        if(err){return next(err);}
        if(employee===null){
            // return res.status(404).json({"message":"employee not found"});
        }   

        Trip.findOneAndDelete({_id: tripID},function(err,trip){
            if(err){return next(err);}
            if(trip===null){
                // return res.status(404).json({"message":"trip (in employee) not found "});
            }
            
            res.json(trip);
        });
    });
});


module.exports = router;





