var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
    destination: {type: String},
    description: {type: String},
    date: {type: Date, default: Date.now},
    budget: {type: Number, required: true, default: 0}
})

var Trip = mongoose.model("trip", tripSchema);

module.exports = Trip;