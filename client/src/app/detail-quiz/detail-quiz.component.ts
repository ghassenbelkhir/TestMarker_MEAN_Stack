import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/Quiz.model';
import { DetailQuizService } from './detail-quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../models/Question.model';

@Component({
  selector: 'app-detail-quiz',
  templateUrl: './detail-quiz.component.html',
  styleUrls: ['./detail-quiz.component.scss']
})
export class DetailQuizComponent implements OnInit {

  quiz = new Quiz() ;
  submitted = false;
  message: string;
  listQuestion :Array<Question>;
  q:Question ;

  constructor(private quizService: DetailQuizService,
    private  router: ActivatedRoute) { }

  ngOnInit() {
    const id = this.router.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id)
      .subscribe(quiz => {this.quiz = quiz;console.log(this.quiz);
        this.quiz.listQuestion.forEach(element => {
          console.log(element.formuler);});
          this.listQuestion =this.quiz.listQuestion;
         
        
      });
  }

}
