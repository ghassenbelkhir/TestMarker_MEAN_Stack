import { Question } from "../models/Question.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class QuestionService {
    public data: any;

    private question: Question;

    //un subject pour émettre cet array
    questionSubject = new Subject<Question>();

    //déclenche ce Subject
    emitQuestion(){
        this.questionSubject.next(this.question);
    }

    //ajoute une question à cet array
    addQuestion(question: Question){
        this.question = question;
        this.emitQuestion();
    }
}