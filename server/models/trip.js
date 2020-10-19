var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
    destination: {type: String, default: "NULL Destination"},
    description: {type: String, default: "NULL Discription"},
    date: {type: Date, default: Date.now},
    budget: {type: Number, default: 0},
    employees: [{type: Schema.Types.ObjectId, ref:"employee"}],
    expenses: [{type: Schema.Types.ObjectId, ref:"expense"}]
   
})

var Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;