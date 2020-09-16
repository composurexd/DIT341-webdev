var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var db = mongoose.connect("mongodb://localhost:27017/",{ useNewUrlParse: true}); //host of server

//define mogo camel chema
var employeeSchema = new Schema({
    fname: {type: String },
    lname:  {type: String },
    //ID:     String,
    birthday: {type: String },
    userName: {type: String },
    userPass: {type: String },
    companyName: {type: String }
});

//Complie model from schema
var Employee = mongoose.model("employees", employeeSchema);
