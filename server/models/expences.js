var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var expencesSchema = new Schema({
    price: {type: Number, required: true, default:0},
    location: {type: String},
    description: {type: String},
    date: {type: Date, default: Date.now}
});

var Expences = mongoose.model("expences", expencesSchema);

module.exports = Expences;