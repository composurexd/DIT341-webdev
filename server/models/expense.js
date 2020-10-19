var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expenseSchema = new Schema({
    price: {type: Number, default:0},
    location: {type: String, default: "NULL location"},
    description: {type: String, default: "NULL Discription"},
    date: {type: Date, default: Date.now},
    trips: [{type: Schema.Types.ObjectId, ref:"trip",}] // took out all the required: true
});

var Expense = mongoose.model("expenses", expenseSchema);

module.exports = Expense;