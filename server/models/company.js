var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema of company
var companySchema = new Schema({
    name: {type: String},
    location: {type: String},
    userName: {type: String},
    userPass: {type: String},
});

var Company = mongoose.model("company", companySchema);

module.exports = Company;
