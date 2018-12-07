import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Professor } from '../models/professor.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})


export class LoginComponent {
    public professor : Professor;
    submitted = false;
    message: string;

  constructor(private loginService: LoginService,private router: Router) {
    this.professor = new Professor();
  }



validateLogin() {
    if(this.professor.email && this.professor.password) {
      this.loginService.validateLogin(this.professor)
      .subscribe(result => {
        console.log('result is ', result);
        if(result['status'] === 'success') {
          this.router.navigate(['/home']);
          this.professor=result["data"]
        } else {
          alert('Wrong email or password');
        }
         
      }, error => {
        console.log('error is ', error);
        alert('Wrong email or password');
      });

    } else {
        alert('enter user name and password');
    }
  }
 
}