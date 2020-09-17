var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    price: {type: Number, required: true, default:0},
    location: {type: String, require:true, default: "NULL location"},
    description: {type: String, require:true, default: "NULL Discription"},
    date: {type: Date, require:true, default: Date.now},
    trip: {type: Schema.Types.ObjectId, ref:"trip", require:true}

});

var Expense = mongoose.model("expenses", expenseSchema);

module.exports = Expense;