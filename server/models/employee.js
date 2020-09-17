var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define employee  chema
var employeeSchema = new Schema({
    fname: {type: String },
    lname:  {type: String },
<<<<<<< HEAD
    birthday: {type: String },
=======
    birthday: {type: Date, default: Date.now},
>>>>>>> 0adba28c1a815ccecdda5747727b16fa4d23f09f
    userName: {type: String },
    userPass: {type: String },
    company: {type: Schema.Types.ObjectId, ref:"company"}
});

//compile model from schema
var Employee = mongoose.model("employees", employeeSchema);

module.exports = Employee;