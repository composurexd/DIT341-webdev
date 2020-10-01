var mongoose = require('mongoose');
const express = require("express");
const Expense = require("../models/expense");
const Trip = require("../models/trip");
//const app = require("../app");

const router = new express.Router();


//create new expense
router.post("/",function(req,res,next){
    var expense = new Expense(req.body);
    expense.save(function(err){
        if(err)
            {return console.log(err);}
        res.status(201).json(expense);
    })

});

router.post('/:id/trip', function(req, res, next){
    var id = req.params.id;
    Expense.findById(id).populate('trip').exec(function(err, expense){
        if (err) { return next(err); }
        if (expense === null) {
            return res.status(404).json({'message': 'expense not found'});
        };
        var trip = new Trip(req.body);
        trip.save();
        expense.trips.push(trip);
        expense.save();
        res.status(201).json(trip);
    });
});

router.get('/', function(req, res, next) {
    Expense.find(function(err, expenses) {
        if (err) { return next(err); }
        res.json({"expenses": expenses});
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Expense.findById(req.params.id, function(err, expense) {
        if (err) { return next(err); }
        if (expense == null) {
            return res.status(404).json({"message": "Expense not found"});
        }
        res.json(expense);
    });
});

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Expense.findById(id, function(err, expense) {
        if (err) { return next(err); }
        if (expense == null) {
            return res.status(404).json({"message": "Expense not found"});
        }
        expense.price = req.body.price;
        expense.location = req.body.location;
        expense.description = req.body.description;
        expense.date = req.body.date;
        expense.trip = req.body.trip;
        expense.save();
        res.json(expense);
    });
});

// Partially update the expense with the given ID
router.patch('/:id', function(req, res, next) {
    var id = req.params.id;
    Expense.findById(id, function(err, expense) {
        if (err) { return next(err); }
        if (expense == null) {
            return res.status(404).json({"message": "Expense not found"});
        }  
        if (req.body.price)     {expense.price = req.body.price;}
        if (req.body.location)  {expense.location = req.body.location;}
        if (req.body.description){expense.description = req.body.description;}
        if (req.body.date)      {expense.date = req.body.date;}
        if (req.body.trips)      {expense.trips = req.body.trips;}
        expense.save();
        res.json(expense);
    });
});

// Delete the Employee with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Expense.findOneAndDelete({_id: id}, function(err, expense) {
        if (err) { return next(err); }
        if (expense == null) {
            return res.status(404).json({"message": "Expense not found"});
        }
        res.json(expense);
    });
});

// Delete all employees
router.delete('/', function(req, res, next) {
    Expense.deleteMany({}, function(err, expense) {
        if (err) { return next(err); }
        if (expense == null) {
            return res.status(404).json({"message": "Expense not found"});
        }
        res.json(expense);
    });
});



module.exports = router;





