var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define employee  chema
var employeeSchema = new Schema({
    fname: {type: String, require:true, default: "NULL Fname"},
    lname:  {type: String, require:true, default: "NULL Lname" },
    birthday: {type: Date, require:true, default: Date.now},
    userName: {type: String, require:true, default: "NULL userName"},
    userPass: {type: String, require:true, default: "NULL userPW"},
    trips: [{type: Schema.Types.ObjectId, ref: "trip"}],
    companys: [{type: Schema.Types.ObjectId, ref:"company", require:true}]
});

//compile model from schema
var Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;