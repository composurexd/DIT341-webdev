//const { Schema } = require("mongoose");

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connect("mongodb://localhost:27017/",{ useNewUrlParse: true}); //host of server

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



var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(comp1.employees[0].lname); //THIS IS A TEST
}).listen(8000);


const employee = new Schema({
    fname:  String,
    lname:  String,
    //ID:     String,
    birthday: String,
    user_name: String,
    user_password: String,
    companyname: String
})

const company = new Schema({
    name: String,
    location: String,
    user_name: String,
    user_password: String,
    employees: []
})

const trip = new Schema({
    //ID: String,
    description: String,
    destination: String,
    date: String,
    budget: Number,
    employees: [],
    //company: company.name,
   // expenses: expenses.ID
    //THIS IS A TEST
})

const expenses = new Schema({
    //ID: String,
    description: String,
    date: String,
    location: String,
    price: Number,
    employee: employee
})


var Company = mongoose.model('Company', company);
comp1 = new Company;
comp1.name = 'Sweboys';
comp1.location = 'GBG';
comp1.user_name = 'Sweboys123';
comp1.user_password = 'password';
comp1.employees = {emp1};

var Employee = mongoose.model('Employee', employee);

var emp1 = new Employee;
emp1.fname = 'Johan';
emp1.lname = 'Berg';
emp1.ID = '11';
emp1.birthday = '12';
user_name = 'j';
user_password = 'b';
companyname = 'x';
