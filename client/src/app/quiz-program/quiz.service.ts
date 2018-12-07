import { Quiz } from "../models/Quiz.model";
import { Subject } from "rxjs/internal/Subject";
import { Observable } from "rxjs";

export class QuizService {
    public storage: any;

    private quiz: Quiz;
    //un subject pour émettre cet array
    quizSubject = new Subject<Quiz>();
    
    /*récupérer la liste des quiz dans la base avec la liste des questions*/


    //déclenche ce Subject
    emitQuiz(){
        this.quizSubject.next(this.quiz);
    }

    //ajoute un quiz à cet array
    addQuiz(quiz: Quiz){
        this.quiz = quiz;
        this.emitQuiz();
    }

    getData(): Observable<any> {
        return this.quizSubject.asObservable();
    }
}