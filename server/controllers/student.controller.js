const Student = require('../models/student.model.js');

// POST a Student
exports.create = (req,res)=>{
    // Create a Student
    const student = new Student(req.body);

    //save a Student in the the MongoDB
    student.save().then(data=>{
        res.json({
            status:'success',
            data: data
        });
    }).catch(err=> {
        res.status(500).json({
            status:'Fail',
            msg: err.message
        });
    });
};

// Fetch all Students
exports.findAll = (req,res)=>{
    Student.find()
    .then(students=>{
        res.json(students);
    }).catch(err =>{
        res.status(500).send({
            msg: err.message
        });
    });
};


exports.findOne = (req,res)=>{
    Student.findById(req.params.StudentId)
    .then(student => {
        if(!student){
            return res.status(404).json({
                msg: "Studnet not found with id "+ req.params.StudnetId
            });
        }
        res.json(student);
        
    }).catch(err=>{
        if(err.kind == 'ObjectId'){
            return res.status(404).json({
                msg :"Student not found with id "+ req.params.StudnetId
            });
        }
        return res.status(500).json({
            msg: "Error retrieving Student with id "+req.params.StudentId
        });
    });
};

exports.login = (req,res)=>{
    Studnet.find({
        email:req.body.email, password:req.body.password
    }).then(studnet=>{
        console.log(studnet);
        if(studnet.length==0){
            return res.status(404).json({
                msg: "Studnet not found with email "+ req.params.email,
                status: 'fail'

            });
        }
        res.json({
            status:'success',
            data: studnet
        });
  
    }).catch(err=>{
        if(err.kind == 'ObjectId'){
            return res.status(404).json({
                msg :"Studnet not found with email "+ req.params.email
            });
        }
        return res.status(500).json({
            msg: "Error retrieving Studnet with email "+req.params.email
        });

    });
}