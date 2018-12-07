import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Professor } from '../models/professor.model';
 

const httpOptions={
    headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
    providedIn: 'root'
})

export class LoginService {
 
	private professorUrl = 'http://localhost:8080/api/professors';

    constructor(private http: HttpClient){

	}
	
	validateLogin(professor: Professor):Observable<Professor>{
		
		return this.http.post<Professor>(this.professorUrl+"/login", professor, httpOptions);
	}
	

	getProfessor(email:string,password:string):Observable<Professor>{
        const url ='${this.professorsUrl}/${email}';
        return this.http.get<Professor>(url);
    }
 
}