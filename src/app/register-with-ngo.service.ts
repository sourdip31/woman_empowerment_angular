import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterWithNGO } from './registerwithNGO';
import{RegisterWithNgoStatus} from './registerWithNgoStatus' ;

@Injectable({
  providedIn: 'root'
})
export class RegisterWithNgoService {

  constructor(private http: HttpClient) { }

  registerWithNgo(registerwithngo : RegisterWithNGO) : Observable <RegisterWithNgoStatus>{
      let url = 'http://localhost:8080/registerWithAnNgo' ;
      return this.http.post<RegisterWithNgoStatus>(url , registerwithngo) ;
  }
}
