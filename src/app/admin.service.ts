import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Accomodation  } from "./accomodation";
import { Observable } from 'rxjs';
import {AccomodationStatus} from './accomodationstatus';
import {ViewAccomodation} from './viewaccomodations';
import {ViewCourses} from './courses';
import {ViewEnrollments} from './enroll';
import {ViewNGO} from './ngo';
import {ViewSY} from './sukanyayojna';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
 addAccomodation(accomodation:Accomodation):Observable<AccomodationStatus>{
    let url='http://localhost:8080/addAccomodation';
    return this.http.post<AccomodationStatus>(url,accomodation);
  }

  updateAccomodation(accomodation:Accomodation):Observable<AccomodationStatus>{
    let url='http://localhost:8080/updateAccomodation';
    return this.http.post<AccomodationStatus>(url,accomodation);
  }

  viewAccomodation(viewaccomodation:ViewAccomodation):Observable<any>{
    let url='http://localhost:8080/deleteAccomodation';
    return this.http.get<any>(url);
  }

  viewCourses(viewcourses:ViewCourses):Observable<any>{
    let url='https://localhost:8080/viewAllCourses';
    return this.http.get<any>(url);
  }

  viewEnrollments(viewcourses:ViewEnrollments):Observable<any>{
    let url='https://localhost:8080/viewAllEnrollments';
    return this.http.get<any>(url);
  }

  viewNGO(viewngo:ViewNGO):Observable<any>{
    let url='https://localhost:8080/viewAllNGOs';
    return this.http.get<any>(url);
  }

  viewSY(viewsy:ViewSY):Observable<any>{
    let url='https://localhost:8080/viewAllEnrollments';
    return this.http.get<any>(url);
  }



}
