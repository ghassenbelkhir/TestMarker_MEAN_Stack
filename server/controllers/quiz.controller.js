const Quiz = require('../models/quiz.model.js');



exports.create = (req,res)=>{
    // Create a Quiz
    const quiz = new Quiz(req.body);

    //save a Quiz in the the MongoDB
    quiz.save().then(data=>{
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

exports.findAll = (req,res)=>{
    Quiz.find()
    .then(quiz=>{
        res.json(quiz);
    }).catch(err =>{
        res.status(500).send({
            msg: err.message
        });
    });
};

// FIND a Customer
exports.findOne = (req, res) => {
    Quiz.findById(req.params.quizId)
    .then(quiz => {
        if(!quiz) {
            return res.status(404).json({
                msg: "quiz not found with id " + req.params.quizId
            });            
        }
        res.json(quiz);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                msg: "quiz not found with id " + req.params.quizId
            });                
        }
        return res.status(500).json({
            msg: "Error retrieving quiz with id " +req.params.quizId
        });
    });
};
 