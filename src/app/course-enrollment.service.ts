import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnrollFormData} from './enroll-course-data' ;
import { EnrollStatus } from './enrollstatus' ;

@Injectable({
  providedIn: 'root'
})
export class CourseEnrollmentService {

  constructor(private http:HttpClient) { }

  courseEnroll(enrolldata : EnrollFormData):Observable<EnrollStatus>{
    let url = 'http://localhost:8080/applyEnroll';
    return this.http.post<EnrollStatus>(url , enrolldata) ;
  }
}
