var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema of company
var companySchema = new Schema({
    name: {type: String, default: "NULL Name"},
    location: {type: String, default: "NULL Location"},
    userName: {type: String, default: "NULL userName"},
    userPass: {type: String, default: "NULL userPW"},
    employees: [{type: Schema.Types.ObjectId, ref:"employee"}],
});

var Company = mongoose.model("companies", companySchema);

module.exports = Company;
