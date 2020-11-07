import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { UserLogin } from './userlogin';
import { Observable } from 'rxjs';
import { UserLoginStatus } from './user-login-status' ;

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http: HttpClient) { }

    login(userlogin: UserLogin) : Observable <UserLoginStatus>  {
      let url = 'http://localhost:8080/loginUser';
      return this.http.post<UserLoginStatus>(url, userlogin);
    }
   
}
