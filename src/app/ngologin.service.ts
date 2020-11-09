import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { UserLogin } from './userlogin';
import { Observable } from 'rxjs';
import { UserLoginStatus } from './user-login-status' ;

@Injectable({
  providedIn: 'root'
})
export class NgologinService {
  
  constructor(private http: HttpClient) { }

    login(userlogin: UserLogin) : Observable <UserLoginStatus>  {
      let url = 'http://localhost:8080/loginNgo';
      return this.http.post<UserLoginStatus>(url, userlogin);
    }
   
}
