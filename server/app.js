var express =require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// configuring the database

const dbConfig = require('./config/mongodb.config.js');
const mongoose = require('mongoose');

const Professor = require('./models/professor.model.js');
const Quiz = require('./models/quiz.model.js');
mongoose.Promise = global.Promise;

// connecting to the database

mongoose.connect(dbConfig.url,{useNewUrlParser: true ,useCreateIndex: true,})
.then(()=>{
    console.log("Successfully connected to MongoDB.");
    Professor.remove({},function(err){
        if(err){
            console.log(err);
            process.exit();
        }
        console.log('Professor collection removed');

        Quiz.remove({},function(err){
          if(err){
              console.log(err);
              process.exit();
          }
          console.log('Quiz collection removed');
          // -> initial new data
          initial();
      });
        // -> initial new data
       
    });
    
}).catch((err)=>{
    console.log('Coulfn not connect to MongoDB. '+err);
    process.exit();
});

const cors =require('cors')
const corsOptions={
    origin: 'http://localhost:4200',
    optionsSuccessStatus:200
}
 app.use(cors(corsOptions))
 var profroute = require('./routes/professor.routes.js')
 var quizroute = require('./routes/quiz.routes.js');

 // Import my test routes into the path '/test'
// app.use('./routes/professor.routes.js', profroute);

 require('./routes/student.routes.js')(app);
 require('./routes/professor.routes.js')(app);
 require('./routes/quiz.routes.js')(app);
 //app.use('/routes',quizroute);
 

 // Create a Server
 const server = app.listen(8080,function(){
     let host = server.address().address
     let port= server.address().port

     console.log("App listening at http://%s:%s", host, port)

 })

 function initial(){
 

let quizs=[{

  title:"Question 1",
  dateCreation :  new Date(),
  description:"Ce questionnaire comporte 9 questions. Pour chaque questions, vous devez cocher l'affirmation qui est vraie",
  listQuestion: [
    {formuler:"Pour transformer un code lisible en code compréhensible par la machine, on utilise :",
       listProposition:[
        {choice:"Un compilateur",isTrue:true,point:1},
        {choice:"Un exécuteur",isTrue:true,point:2},
         {choice:"Un traducteur",isTrue:false,point:0}]
    },
    {
      formuler:"Lequel n'a pas sa place parmi ces choix  :",
      listProposition:[
      {choice:"instanceof",isTrue:true,point:1},
      {choice:"select",isTrue:true,point:2},
      {choice:"for",isTrue:false,point:0},
      {choice:"volatile",isTrue:false,point:0}]

   }

]
}]

    let professors = [
      {
        firstname: "Joe",
        lastname: "Thomas",
        password: "123",
        email: "joe@gmail.com"

      },
      {
        firstname: "Peter",
        lastname: "Smith",
        password: "123",
        email: "peter@gmail.com"
      },
      {
        firstname: "Lauren",
        lastname: "Taylor",
        password: "123",
        email: "lauren@gmail.com"
      },
      {
        firstname: "Mary",
        lastname: "Taylor",
        password: "123",
        email: "mary@gmail.com"
      },
      {
        firstname: "David",
        lastname: "Moore",
        password: "123",
        email: "david@gmail.com"
      },
      {
        firstname: "Holly",
        lastname: "Davies",
        password: "123",
        email: "holly@gmail.com"
      },
      {
        firstname: "Michael",
        lastname: "Brown",
        password: "123",
        email: "michael@gmail.com"
      }
    ]
   
    // Init data -> save to MongoDB
 
    for (let i = 0; i < professors.length; i++) { 
        const professor = new Professor(professors[i]);
        
        professor.save();
    }
    console.log(">>> Done - professor Initial Data!");

    for (let i = 0; i < quizs.length; i++) { 
      const quiz = new Quiz(quizs[i]);
      
      quiz.save();
  }
    console.log(">>> Done -quiz Initial Data!");
}
