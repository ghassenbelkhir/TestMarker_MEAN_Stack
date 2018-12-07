const Professor = require('../models/professor.model.js');

// POST a Professor
exports.create = (req,res)=>{
    // Create a Professor
    const professor = new Professor(req.body);

    //save a Professor in the the MongoDB
    professor.save().then(data=>{
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

// Fetch all Professors
exports.findAll = (req,res)=>{
    Professor.find()
    .then(professors=>{
        res.json(professors);
    }).catch(err =>{
        res.status(500).send({
            msg: err.message
        });
    });
};

// Find a Customer 
exports.findOne = (req,res)=>{
    Professor.findById(req.params.ProfessorId)
    .then(professor => {
        if(!professor){
            return res.status(404).json({
                msg: "Professor not found with id "+ req.params.professorId
            });
        }
        res.json(professor);
        
    }).catch(err=>{
        if(err.kind == 'ObjectId'){
            return res.status(404).json({
                msg :"Professor not found with id "+ req.params.professorId
            });
        }
        return res.status(500).json({
            msg: "Error retrieving Professor with id "+req.params.professorId
        });
    });
};

exports.login = (req,res)=>{
    Professor.find({
        email:req.body.email, password:req.body.password
    }).then(professor=>{
        console.log(professor);
        if(professor.length==0){
            return res.status(404).json({
                msg: "Professor not found with email "+ req.params.email,
                status: 'fail'

            });
        }
        res.json({
            status:'success',
            data: professor
        });
  
    }).catch(err=>{
        if(err.kind == 'ObjectId'){
            return res.status(404).json({
                msg :"Professor not found with email "+ req.params.email
            });
        }
        return res.status(500).json({
            msg: "Error retrieving Professor with email "+req.params.email
        });

    });
}