import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import { Observable } from 'rxjs';
import { AdminLogin } from './adminlogin';
import { AdminLoginStatus } from './adminloginstatus' ;

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private http: HttpClient) { }


login(adminlogin: AdminLogin) : Observable <AdminLoginStatus>  {
  let url = 'https://localhost:8080/loginAdmin';
  return this.http.post<AdminLoginStatus>(url, adminlogin);
}
}




