import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PasswordChange } from './passwordChange';
import { Status } from './status-class';

@Injectable({
  providedIn: 'root'
})
export class NgoChangePassService {

  constructor(private http: HttpClient) { }

  ngoChangePass(ngopasschange : PasswordChange) : Observable<Status>  {
    let url = 'http://localhost:8080/ngoChangePassword';
    return this.http.post<Status>(url, ngopasschange);
  }
}
