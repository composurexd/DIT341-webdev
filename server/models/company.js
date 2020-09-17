var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define schema of company
var companySchema = new Schema({
    name: {type: String},
    location: {type: String},
    userName: {type: String},
<<<<<<< HEAD
    userPassword: {type: String},
});

var Company = mongoose.model("companies", companySchema);

module.exports = Company;
=======
    userPass: {type: String},
});

var Company = mongoose.model("company", companySchema);

module.exports = Company;
>>>>>>> 0adba28c1a815ccecdda5747727b16fa4d23f09f
