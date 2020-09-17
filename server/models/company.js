var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema of company
var companySchema = new Schema({
    name: {type: String},
    location: {type: String},
    userName: {type: String},
    userPassword: {type: String},
});

var Company = mongoose.model("companies", companySchema);

module.exports = Company;