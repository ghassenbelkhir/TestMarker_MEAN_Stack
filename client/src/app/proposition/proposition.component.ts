import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Proposition } from '../models/Proposition.model';
import { PropositionService } from './proposition.service';
import { Question } from '../models/Question.model';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html', 
  styleUrls: ['./proposition.component.scss']
})
export class PropositionComponent implements OnInit {
  form: FormGroup;
 // isHide;
  newProposition = new Proposition();
  @Input() ourQuestion: Question;
  //counter : number;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    //this.isHide = true;
    //this.counter = 1;
    this.form = this.formBuilder.group({
      choice: new FormControl('', Validators.required),
      isTrue: new FormControl(false, Validators.required),
      point: new FormControl('', Validators.required)
    });
  }
  
  onSubmit(){
    this.ourQuestion.listProposition.push(this.newProposition);  
    //this.counter = this.counter + 1;
   /* const x = document.getElementById('toHide');
    if(!x.hidden) this.isHide = false; */
    //console.log(this.counter);
  }

  //quand on check => true
  onCheck():boolean{
    if(this.form.get('isTrue').touched) return true;
    else return false;
  }

}
