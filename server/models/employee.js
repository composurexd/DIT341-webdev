var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define employee  chema
var employeeSchema = new Schema({
    fname: {type: String, default: "NULL Fname"},
    lname:  {type: String, default: "NULL Lname" },
    userName: {type: String, default: "NULL userName"},
    userPass: {type: String, default: "NULL userPW"},
    trips: [{type: Schema.Types.ObjectId, ref: "trip"}],
    companys: [{type: Schema.Types.ObjectId, ref:"company"}]
});

//compile model from schema
var Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;