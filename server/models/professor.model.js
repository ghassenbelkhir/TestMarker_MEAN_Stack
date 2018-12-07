const mongoose = require('mongoose');

const ProfessorSchema = mongoose.Schema({
    firstname: String,
    lastename: String,
    email : {type:String, required:true,unique:true},
    password : {type : String, required:true}
});

module.exports=mongoose.model('Professor',ProfessorSchema);