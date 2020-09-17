var mongoose = require('mongoose');
const express = require("express");
const Company = require("../models/company");

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
router.get('/', function(req, res, next) {
    Company.find(function(err, companies) {
        if (err) { return next(err); }
        res.json({"companies": companies});
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Company.findById(req.params.id, function(err, company) {
        if (err) { return next(err); }
        if (company == null) {
            return res.status(404).json({"message": "Company not found"});
        }
        res.json(company);
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
        company.name = req.body.name;
        company.location = req.body.location;
        company.userName = req.body.userName;
        company.userPass = req.body.userPass;
        company.save();
        res.json(company);  
    });
});

// Delete the Employee with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Company.findOneAndDelete({_id: id}, function(err, companies) {
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

