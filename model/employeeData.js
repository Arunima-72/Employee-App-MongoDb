const mongoose=require('mongoose');
//Create Schema
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDesignation:String,
    employeeLocation:String,
    employeeSalary:String
})
const EmployeeData=mongoose.model('Employee',employeeSchema);//mapping collection to schema
module.exports=EmployeeData;