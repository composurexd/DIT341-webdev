var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tripSchema = new Schema({
    destination: {type: String, require:true, default: "NULL Destination"},
    description: {type: String, require:true, default: "NULL Discription"},
    date: {type: Date, default: Date.now, require:true},
    budget: {type: Number, required: true, default: 0},
    expense: [{type: Schema.Types.ObjectId, ref:"expense"}]

})

var Trip = mongoose.model("trips", tripSchema);

module.exports = Trip;