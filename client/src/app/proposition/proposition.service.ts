import { Proposition } from "../models/Proposition.model";
import { Subject } from "rxjs";

export class PropositionService {
    private listProposition: Array<Proposition>;
    propositionSubject = new Subject<Proposition[]>();

    //déclenche ce Subject
    emitProposition(){
        this.propositionSubject.next(this.listProposition.slice());
    }

    //ajoute une question à cet array
    addProposition(prop: Proposition){
        this.listProposition.push(prop);
        this.emitProposition();
    }
}