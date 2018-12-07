const mongoose = require('mongoose');

const QuizSchema = mongoose.Schema({
    title:{ type:String, required:true},
    dateCreation: Date,
    description:String,
    listQuestion:[{formuler: String,listProposition:[{choice: String,
        isTrue: Boolean,
        point: Number
    }]
}]
  
});

module.exports=mongoose.model('Quiz',QuizSchema);