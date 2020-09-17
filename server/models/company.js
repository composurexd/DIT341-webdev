var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema of company
var companySchema = new Schema({
    name: {type: String},
    location: {type: String},
    userName: {type: String},
    userPass: {type: String},
    employees: [{type: Schema.Types.ObjectId, ref:"employee"}],
    trip : [{type: Schema.Types.ObjectId, ref:"trip"}]
});

var Company = mongoose.model("company", companySchema);

module.exports = Company;
