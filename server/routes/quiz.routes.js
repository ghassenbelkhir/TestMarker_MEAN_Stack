module.exports = function(app) {
 
    var quiz = require('../controllers/quiz.controller.js');
 
    // Create a new Quiz
    app.post('/api/quiz', quiz.create);
 
    // Retrieve all Quiz
    app.get('/api/quiz', quiz.findAll);
 
    // Retrieve a single Quiz by Id
    app.get('/api/quiz/:quizId', quiz.findOne);
 
    // Update a Quiz with Id
    /*app.put('/api/quiz', quiz.update);
 
    // Delete a Quiz with Id
    app.delete('/api/quiz/:quizId', quiz.delete);*/
}