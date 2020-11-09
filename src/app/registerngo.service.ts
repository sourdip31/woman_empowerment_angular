import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{NgoRegister } from './ngo-register';
import{RegisterStatus} from './register-status' ;

@Injectable({
  providedIn: 'root'
})
export class RegisterngoService {

  constructor(private http:HttpClient) { }
  ngoregister(ngoregister : NgoRegister):Observable<RegisterStatus>{
    let url='http://localhost:8080/registerNgo';
    return this.http.post<RegisterStatus>(url,ngoregister);
  }
}
