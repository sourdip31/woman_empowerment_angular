import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsService {

  constructor(private http:HttpClient) { }

//  viewAllNgos(ngologin: NgoLogin) : Observable <any>  {
 //   let url = 'http://localhost:8080/viewAllCourses';
  //  return this.http.request<NgoLoginStatus>(url, ngologin);
  //}
}
