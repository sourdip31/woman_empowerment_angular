import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasswordChange } from './passwordChange';
import { Status } from './status-class';

@Injectable({
  providedIn: 'root'
})
export class AdminChangePassService {

  constructor(private http: HttpClient) { }

  adminChangePass(adminpasschange : PasswordChange) : Observable<Status>  {
    let url = 'http://localhost:8080/adminChangePassword';
    return this.http.post<Status>(url, adminpasschange);
  }
}
