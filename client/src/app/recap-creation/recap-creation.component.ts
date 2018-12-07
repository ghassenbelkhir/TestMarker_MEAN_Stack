import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../models/Quiz.model';
import { QuizService } from '../quiz-program/quiz.service';

@Component({
  selector: 'app-recap-creation',
  templateUrl: './recap-creation.component.html',
  styleUrls: ['./recap-creation.component.scss']
})
export class RecapCreationComponent implements OnInit {
quiz: Quiz;

  constructor(private router: Router, private _data: QuizService,) {
    this.quiz = new Quiz();

    this.getData();
    console.log(this.quiz.title);
    console.log(this.quiz.listQuestion.slice());
  }

  ngOnInit() {
  }

  /*getData(){ //url route
    this.route.queryParams.subscribe(element => {
      this.quiz.title = element.title;
      this.quiz.description = element.description? element.description : '';
      this.quiz.dateCreation = element.dateCreation;
      this.quiz.listQuestion = JSON.parse(element.listQuestion);
    });
  
  }*/

  getData(){ // data provides
    this.quiz = this._data.storage;  
  }

  validate(){
    console.log("**after validate**");
    console.log(this.quiz.title+' '+this.quiz.description+' '+this.quiz.dateCreation);
    console.log(this.quiz.listQuestion.slice());
    this.router.navigate(['/home']);
  }

  discard(){
    if(confirm('Etes-vous sûr de vouloir annuler ? Toutes créations seront perdues!')){
      this.quiz = null;
      console.log("---after discard---");
      console.log(this.quiz);
      this.router.navigate(['/home']);
    } else {
      return null;
    }
  }

}
