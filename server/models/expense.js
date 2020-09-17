var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    price: {type: Number, required: true, default:0},
    location: {type: String},
    description: {type: String},
    date: {type: Date},
    trip: {type: Schema.Types.ObjectId, ref:"trip"}

});

var Expense = mongoose.model("expenses", expenseSchema);

module.exports = Expense;