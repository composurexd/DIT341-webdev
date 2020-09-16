const { Model } = require("mongoose");

function addEmployee(fname,lname,bDay,userName,userPass,company){
    
    //create new instance of employee
    var newEmployee = new server/models.Employee({
        fname: fname,
        lname: lname,
        birthday:  bDay,
        userName: userName,
        userPass: userPass,
        companyName: company
    });
    //save instance of employee
    newEmployee.save(function(err){
        if(err)
            {return console.log(err);}
        console.log("saved!");
    });




};