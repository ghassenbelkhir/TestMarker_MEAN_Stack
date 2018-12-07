module.exports = function(app){
    var professors =require('../controllers/professor.controller.js');

    // Create a new Professor
    app.post('/api/professors',professors.create);

    // Retrieve all Professor
    app.get('/api/professors',professors.findAll);

    // Retrieve a single Professor by Id
    app.get('/api/professors/:id',professors.findOne);

     // Retrieve a single Professor by Id
     app.post('/api/professors/login',professors.login);

    // Update a Professor with Id
    //app.put('/api/professors/:id',professors.update);

    // Delete a Professor with Id
    //app.delete('/api/professors/:id',professors.delete);
}