var mongoose = require('mongoose');
const express = require("express");
const Company = require("../models/company");
const Employee= require("../models/employee");
const Trip    = require("../models/trip");

const router = new express.Router();



//create new company
router.post("/",function(req,res,next){
    var company = new Company(req.body);
    company.save(function(err){
        if(err)
            {return console.log(err);}
        res.status(201).json(company);
    })

});

router.post('/:id/employee', function(req, res, next){
    var id = req.params.id;
    Company.findById(id).populate('employee').exec(function(err, company){
        if (err) { return next(err); }
        if (company === null) {
            return res.status(404).json({'message': 'company not found'});
        };
        var employee = new Employee(req.body);
        employee.save();
        company.employees.push(employee);
        company.save();
        res.status(201).json(employee);
    });
});

router.post('/:id/trip', function(req, res, next){
    var id = req.params.id;
    Company.findById(id).populate('trip').exec(function(err, company){
        if (err) { return next(err); }
        if (company === null) {
            return res.status(404).json({'message': 'Company not found'});
        };
        var trip = new Trip(req.body);
        trip.save();
        company.trips.push(trip);
        company.save();
        res.status(201).json(trip);
    });
});


//get company/employees (M1, 3b) //DOUBLE CHECK END POINT IS ALWAYS PLURAL
router.get("/:id/employees",function(req,res,next){
    var id = req.params.id;
    Company.findById(id, function(err,company){
        if (err) { return next(err); }
        if (company == null) {
            return res.status(404).json({"message": "Company not found"});
        }
        res.status(201).json(company.employees);
    });
});

router.get('/', function(req, res, next) {
    Company.find(function(err, companies) {
        if (err) { return next(err); }
        res.json({"companies": companies});
    });
});

router.get('/:id', function(req, res, next) {
    Company.findById(req.params.id, function(err, company) {
        if (err) { return next(err); }
        if (company === null) {
            return res.status(404).json({"message": "Company not found"});
        }
        res.json(company);
    });
});

//get employeeByID from CompanyByID-employee-Array //SHOULD PROBOBLY BE IN EMPLOYEE
router.get("/:companyID/employees/:employeeID", function(req,res,next){
    var compID = req.params.companyID;
    var emplID = req.params.employeeID;
    Company.findById(compID,function(err,company){
        if(err){return next(err);}
        if(company===null){
            return res.status(404).json({"message":"Company not found"});
        }
        Employee.findById(emplID,function(err,employee){
            if(err){return next(err);}
            if(employee===null){
                //if employee.companies is equal to compID
                return res.status(404).json({"message":"Employee (in company) not found "});
            }
            res.json(employee);
        });
    });
});
//DELETE employeeById from CompanyByID-employees-ary
router.delete("/:companyID/employees/:employeeID", function(req,res,next){
    var compID = req.params.companyID;
    var emplID = req.params.employeeID;
    Company.findById(compID,function(err,company){
        if(err){return next(err);}
        if(company===null){
            return res.status(404).json({"message":"Company not found"});
        }
        Employee.findOneAndDelete(emplID,function(err,employee){
            if(err){return next(err);}
            if(employee===null){
                return res.status(404).json({"message":"Employee (in company) not found "});
            }
            //TODO: DELETE THE EMPLOYEE OUT OF THE COMPANY EMPLOYEEarray???? (CHECK OTHER DELETES IF IT ACTUALLY TAKES IT OUT OF THE ARRAYs...)
            company.findOneAndDelete(emplID, function(err,employee){
                if(err){return next(err);}
                if(employee===null){
                    return res.status(404).json({"message":"employee could not be deleted in company"});
                }
                
            });
            res.json(employee);
        });
    });
});
router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Company.findById(id, function(err, company) {
        if (err) { return next(err); }
        if (company == null) {
            return res.status(404).json({"message": "Company not found"});
        }
        company.name = req.body.name;
        company.location = req.body.location;
        company.userName = req.body.userName;
        company.userPass = req.body.userPass;
        company.save();
        res.json(company);
    });
});

// Partially update the company with the given ID
router.patch('/:id', function(req, res, next) {
    var id = req.params.id;
    Company.findById(id, function(err, company) {
        if (err) { return next(err); }
        if (company == null) {
            return res.status(404).json({"message": "Company not found"});
        }
        if (req.body.name) {company.name = req.body.name;}
        if (req.body.location) {company.location = req.body.location;}
        if (req.body.userName) {company.userName = req.body.userName;}
        if (req.body.userPass) {company.userPass = req.body.userPass;}
        company.save();
        res.json(company);  
    });
});

// Delete the Employee with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Company.findOneAndDelete({_id: id}, function(err, company) {
        if (err) { return next(err); }
        if (company == null) {
            return res.status(404).json({"message": "Company not found"});
        }
        res.json(company);
    });
});

// Delete all employees
router.delete('/', function(req, res, next) {
    Company.deleteMany({}, function(err, company) {
        if (err) { return next(err); }
        if (company == null) {
            return res.status(404).json({"message": "Company not found"});
        }
        res.json(company);
    });
});






module.exports = router;

