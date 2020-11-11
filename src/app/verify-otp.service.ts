import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {GetOtp} from './getOtp' ;
import{Status} from './status-class' ;

@Injectable({
  providedIn: 'root'
})
export class VerifyOTPService {

  constructor(private http: HttpClient) { }

  verifyOtp(getOTP : GetOtp) : Observable<Status>{
    let url = 'http://localhost:8080/userOTPverify' ;
    return this.http.post<Status> (url , getOTP) ;

  } 

  verifyOtpNgo(getOTP : GetOtp) : Observable<Status>{
    let url = 'http://localhost:8080/ngoOTPverify' ;
    return this.http.post<Status> (url , getOTP) ;

  } 

  verifyOtpAdmin(getOTP : GetOtp) : Observable<Status>{
    let url = 'http://localhost:8080/adminOTPverify' ;
    return this.http.post<Status> (url , getOTP) ;

  } 
}
