import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl} from '@angular/forms';
import { Question } from '../models/Question.model';
import { QuestionService } from './question.service';
import { Quiz } from '../models/Quiz.model';
import { QuizService } from '../quiz-program/quiz.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit{
  questionForm: FormGroup;
  question: Question;

  ourQuiz: Quiz ; 
  now: Date = new Date();
  dateNow: string = this.now.toDateString();

  isHide: boolean;
  isFinished: boolean;
  //counter: number;

  constructor(private formBuilder: FormBuilder, private questionService: QuestionService, private data: QuizService,
    private route: ActivatedRoute, private router: Router) { 
    //this.question = new Question();
    //this.question.formuler = "";
    this.ourQuiz = new Quiz();
   
    this.getQuizData();
  }

  ngOnInit() {
    this.question = new Question();
    this.isHide = true;
    this.isFinished = true;
    //this.counter = 0;
    this.initQuestionForm();
    this.onAddProposition();
  }

  //initialise le formulaire
  initQuestionForm(){
    this.questionForm = this.formBuilder.group({
      formuler: new FormControl('',Validators.required),
      proposition: this.formBuilder.array([])
    });
  }

  //ajouter les valeurs des champs dans la table
  onSubmitForm(){
    this.navigate();
  }

  //prend les données de quiz envoyées
  getQuizData(){
    this.ourQuiz.dateCreation = this.dateNow;
    this.route.queryParams.subscribe(params => {
      this.ourQuiz.title = params.title;
      this.ourQuiz.description = params.comment? params.comment : '';
    });
  }

  getProposition(): FormArray{
    return this.questionForm.get('proposition') as FormArray;
  }

  //ajoute dans la liste des propositions
  onAddProposition(){
    const newPropositionControl = this.formBuilder.group({});
    this.getProposition().push(newPropositionControl);
    //this.counter = this.counter + 1;
  }

  onHideButton(){
    const x = document.getElementById('toHide');
    const y = document.getElementById('toShow');
    if(!x.hidden && y.hidden) return this.isHide = false;
  }

  //push dans une liste la question
  onCreateQuestion(){
    this.ourQuiz.listQuestion.push(this.question);
   // this.lquestion.push(this.question);
    console.log(this.ourQuiz.listQuestion);
    //add now
    this.ngOnInit();
  }

  onStop(){
    this.ourQuiz.listQuestion.push(this.question);
    const x = document.getElementById('notEnd');
    const y = document.getElementById('toFinish');
    if(!x.hidden && y.hidden) return this.isFinished = false;
  }

  //envoie toutes les données à la page recapitulation
  /*navigate(){ //url route
    let navigationExtras: NavigationExtras= {
      queryParams: {
        title: this.ourQuiz.title,
        description: this.ourQuiz.description,
        dateCreation: this.ourQuiz.dateCreation,
        listQuestion: JSON.stringify({
          question: this.ourQuiz.listQuestion
        })
      }
    }
    this.router.navigate(['/recapitulation'], navigationExtras);

  }*/ 

  navigate(){ //data provides
    this.data.storage = this.ourQuiz;
    this.router.navigate(['/recapitulation']);
  }

}
