import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CoursebyngoService {

  constructor(private http:HttpClient) { }
  course():Observable<Course[]>{
    let url = "http://localhost:8080/viewCoursesByNGO" ;
    return this.http.get<Course[]>(url) ;
  }
}
