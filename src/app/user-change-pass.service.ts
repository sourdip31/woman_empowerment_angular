import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Status} from './status-class';
import {PasswordChange} from './passwordChange';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserChangePassService {

  constructor(private http: HttpClient) { }

  userChangePass(userpasschange : PasswordChange) : Observable<Status>  {
    let url = 'http://localhost:8080/userChangePassword';
    return this.http.post<Status>(url, userpasschange);
  }
 
}
