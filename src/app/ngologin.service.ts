import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;

import{NgoLogin} from './ngologin';
import { Observable } from 'rxjs';

import{NgoLoginStatus} from './ngo-login-status';

@Injectable({
  providedIn: 'root'
})
export class NgologinService {
  
  constructor(private http: HttpClient) { }

    login1(ngologin: NgoLogin) : Observable <NgoLoginStatus>  {
      let url = 'http://localhost:8080/loginNGO';
      return this.http.post<NgoLoginStatus>(url, ngologin);
    }
   
}
