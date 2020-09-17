var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
    destination: {type: String},
    description: {type: String},
    date: {type: Date, default: Date.now},
    budget: {type: Number, required: true, default: 0}
})

<<<<<<< HEAD
var Trip = mongoose.model("trips", tripSchema);
=======
var Trip = mongoose.model("trip", tripSchema);
>>>>>>> 0adba28c1a815ccecdda5747727b16fa4d23f09f

module.exports = Trip;