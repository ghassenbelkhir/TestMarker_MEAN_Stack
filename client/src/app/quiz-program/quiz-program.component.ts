import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { QuizService } from './quiz.service';
import { Router, NavigationExtras } from '@angular/router';
import { Quiz } from '../models/Quiz.model';

@Component({
  selector: 'app-quiz-program',
  templateUrl: './quiz-program.component.html',
  styleUrls: ['./quiz-program.component.css']
})
export class QuizProgramComponent implements OnInit {
  quizForm: FormGroup;
  quiz: Quiz;

  constructor(private formBuilder: FormBuilder, private quizService: QuizService, private router: Router) {
    this.quiz = new Quiz();
   }

  ngOnInit() {
    this.initQuizForm();
  }

  //initialise le formulaire
  initQuizForm(){
    this.quizForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      comment: new FormControl()
    });
  }

  //envoie les données et navigue vers la destination
  navigate(){
    const data = this.quizForm.value;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        title: data['title'],
        comment: data['comment']
      }
    }
    this.router.navigate(['/createQuestion'], navigationExtras);
  }
}
