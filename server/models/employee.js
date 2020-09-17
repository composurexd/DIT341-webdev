var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define mogo camel chema
var employeeSchema = new Schema({
    fname: {type: String },
    lname:  {type: String },
    birthday: {type: Date, default: Date.now},
    userName: {type: String },
    userPass: {type: String },
    company: {type: Schema.Types.ObjectId, ref:"company"}
});

//Complie model from schema
var Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;