import { User } from '../models/user.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { updateBinding } from '@angular/core/src/render3/instructions';
import { SignUpService } from './sign-up.service';
import { Professor } from '../models/professor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  professor:Professor;
  emailPattern ="^[a-z0-9. %+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  passwordRepeat:string;

  constructor(private signUpService : SignUpService,private router: Router) { 
    this.professor = new Professor();
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm)
  {
    if(form !=null)
    form.reset();
    this.professor = new Professor();
  }  


 

  private save(): void {
    
  }
  addUser() {
    if(this.professor.email && this.professor.password){
      console.log(this.professor);
      this.signUpService.addProfessor(this.professor)
          .subscribe(result=>{
            if(!result)
            {
              alert('Wrong email or password');
            }
            else{
              this.router.navigate(['/home']);
            }
          });
    
    } else {
      alert('email and password required');
    }
  }
}
