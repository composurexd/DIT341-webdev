var mongoose = require('mongoose');
const express = require("express");
const Expense = require("../models/expense");
const Trip = require("../models/trip");
const Employee = require("../models/employee");

const router = new express.Router();


//create new trip
router.post("/",function(req,res,next){
    var trip = new Trip(req.body);
    trip.save(function(err){
        if(err)
            {return console.log(err);}
        res.status(201).json(trip);
    })
});


  router.post('/:id/expenses', function(req, res, next){
    var id = req.params.id;
    Trip.findById(id).populate('expense').exec(function(err, trip){
        if (err) { return next(err); }
        if (trip === null) {
            return res.status(404).json({'message': 'Trip not found'});
        };
        var expense = new Expense(req.body);
        expense.save();
        trip.expenses.push(expense);
        trip.save();
        res.status(201).json(expense);
    });
});

router.post('/:id/employees', function(req, res, next){
    var id = req.params.id;
    Trip.findById(id).populate('employee').exec(function(err, trip){
        if (err) { return next(err); }
        if (trip === null) {
            return res.status(404).json({'message': 'trip not found'});
        };
        var employee = new Employee(req.body);
        employee.save();
        trip.employees.push(employee);
        trip.save();
        res.status(201).json(employee);
    });
});

router.get('/', function(req, res, next) {
    Trip.find(function(err, trips) {
        if (err) { return next(err); }
        res.json({"trips:": trips});
    });
});

router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    Trip.findById(req.params.id, function(err, trip) {
        if (err) { return next(err); }
        if (trip == null) {
            return res.status(404).json({"message": "Trip not found"});
        }
        res.json(trip);
    });
});
// filter all trips which belong to a employee (returns trips[Object])
router.get('/employees/:id', function(req, res, next) {
    var eID = req.params.id; 
    Trip.find(function(err, trips) {
        if (err) { return next(err); }
        var filteredTrips = [];
        for (var x=0; x<trips.length;x++){
            if(trips[x].employees == eID){ // === identical / == same (even if one string the other int)
                filteredTrips.push(trips[x]);
            }
        }
        res.status(200).json({"trips": filteredTrips});
    });
});

router.put('/:id', function(req, res, next) {
    var id = req.params.id;
    Trip.findById(id, function(err, trip) {
        if (err) { return next(err); }
        if (trip == null) {
            return res.status(404).json({"message": "Trip not found"});
        }
        trip.destination = req.body.destination;
        trip.location = req.body.location;
        trip.description = req.body.description;
        trip.budget = req.body.budget;
        trip.employees = req.body.employees;
        trip.expenses = req.body.expenses;
        trip.save();
        res.json(trip);
    });
});

// Partially update the trip with the given ID
router.patch('/:id', function(req, res, next) {
    var id = req.params.id;
    Trip.findById(id, function(err, trip) {
        if (err) { return next(err); }
        if (trip == null) {
            return res.status(404).json({"message": "Trip not found"});
        }     
        if (req.body.destination)     {trip.destination = req.body.destination;}
        if (req.body.location)     {trip.location = req.body.location;}
        if (req.body.description)     {trip.description = req.body.description;}
        if (req.body.budget)     {trip.budget = req.body.budget;}
        if (req.body.employees)     {trip.employees = req.body.employees;}
        if (req.body.expenses)     {trip.expenses = req.body.expenses;}
        trip.save();
        res.json(trip);
    });
});

// Delete the trip with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Trip.findOneAndDelete({_id: id}, function(err, trip) {
        if (err) { return next(err); }
        if (trip == null) {
            return res.status(404).json({"message": "Trip not found"});
        }
        res.json(trip);
    });
});

// Delete all trips
router.delete('/', function(req, res, next) {
    Trip.deleteMany({}, function(err, trip) {
        if (err) { return next(err); }
        if (trip == null) {
            return res.status(404).json({"message": "Trip not found"});
        }
        res.json(trip);
    });
});

//DELETE expense from trip
router.delete("/:tripID/expenses/:expenseID", function(req,res,next){
    var tripID = req.params.tripID;
    var expenseID = req.params.expenseID;
    
    Trip.findByIdAndUpdate(tripID, {$pull : {expenses : expenseID}}, function(err,trip){
        if(err){return next(err);}
        if(trip===null){
            return res.status(404).json({"message":"trip not found"});
        }   

        Expense.findOneAndDelete({_id: expenseID},function(err,expense){
            if(err){return next(err);}
            if(expense===null){
                return res.status(404).json({"message":"expense (in trip) not found "});
            }
            
            res.json(expense);
        });
    });
});

router.post("/expenses", function(req, res, next) { //TODO: THIS IS A GET THAT SHOULD BE A POST
  //  var id = req.params.id;
    Trip.findById(id).populate('expense').
    exec(function (err, trip) {
        if (err) return handleError(err);
        console.log("Expense of this trip is ${Trip.expense.description}",);
        res.json(trip);

    });
});



module.exports = router;





