import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GetEmail} from './getEmail' ;
import {Status} from './status-class' ;

@Injectable({
  providedIn: 'root'
})
export class GenerateOTPService {

  constructor(private http: HttpClient) { }
  generateOtp(emailId : GetEmail ) : Observable<Status>{
    let url = 'http://localhost:8080/forgotUser' ;
    return this.http.post<Status>(url , emailId) ;
  }

  generateOtpNgo(emailId : GetEmail ) : Observable<Status>{
    let url = 'http://localhost:8080/forgotNgo' ;
    return this.http.post<Status>(url , emailId) ;
  }

  generateOtpAdmin(emailId : GetEmail ) : Observable<Status>{
    let url = 'http://localhost:8080/forgotAdmin' ;
    return this.http.post<Status>(url , emailId) ;
  }

}
