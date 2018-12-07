const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    firstname: String,
    lastename: String,
    email : {type:String, required:true,unique:true},
    password : {type : String, required:true}
});

module.exports=mongoose.model('Student',StudentSchema);