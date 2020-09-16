const { Schema } = require("mongoose");

var Schema = mongoose.Schema;

var mongoose = require('mongoose');

var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(comp1.name);
}).listen(8000);


const employee = new Schema({
    "fname":  String,
    "lname":  String,
    "ID":     String,
    "birthday": String,
    "user_name": String,
    "user_password": String,
    "companyname": String


})

const company = new Schema({
    "name": String,
    "location": String,
    "user_name": String,
    "user_password": String,
    "employees": []
})

const trip = new Schema({
    "ID": String,
    "description": String,
    "destination": String,
    "date": String,
    "budget": Number,
    "employees": [],
    //company: company.name,
   // expenses: expenses.ID

})

const expenses = new Schema({
    "ID": String,
    "description": String,
    "date": String,
    "location": String,
    "price": Number,
    "employee": employee
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
