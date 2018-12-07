import { Question } from "./Question.model";

export class Quiz {
    
    constructor(){
        this.title = '';
        this.listQuestion = new Array<Question>();
        this.dateCreation = '';
        this.description = '';
    }
        public title: string;
        public listQuestion: Array<Question>;
        public dateCreation: string;
        public description?: string;
}