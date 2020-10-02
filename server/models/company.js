var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema of company
var companySchema = new Schema({
    name: {type: String, require:true, default: "NULL Name"},
    location: {type: String, require:true, default: "NULL Location"},
    userName: {type: String, require:true, default: "NULL userName"},
    userPass: {type: String, require:true, default: "NULL userPW"},
    employees: [{type: Schema.Types.ObjectId, ref:"employee"}],
    trips : [{type: Schema.Types.ObjectId, ref:"trip"}]
});

var Company = mongoose.model("companies", companySchema);

module.exports = Company;
