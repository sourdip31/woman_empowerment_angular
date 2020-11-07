import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from './user-register';
import{RegisterStatus} from './register-status' ;

@Injectable({
  providedIn: 'root'
})
export class RegisteruserService {

  constructor(private http:HttpClient) { }
  userregister(userregister : UserRegister):Observable<RegisterStatus>{
    let url='http://localhost:8080/registerUser';
    return this.http.post<RegisterStatus>(url,userregister);
  }
}
