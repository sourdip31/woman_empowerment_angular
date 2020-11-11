import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgoId} from './ngoid' ;
import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursebyngoService {

  constructor(private http:HttpClient) { }
  course(ngoid:NgoId):Observable<Course[]>{
    let url = "http://localhost:8080/viewCoursesByNGO" ;
    return this.http.post<Course[]>(url,ngoid) ;
  }
}
