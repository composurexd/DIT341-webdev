const { Model } = require("mongoose");

function addEmployee(fname,lname,bDay,userName,userPass,company){
    
    var newEmployee = new server/models.Employee({
        fname: fname,
        lname: lname,
        birthday:  bDay,
        userName: {type: String },
        userPass: {type: String },
        companyName: {type: String }


    });
}