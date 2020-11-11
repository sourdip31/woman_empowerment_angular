import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Ngoeditcourse} from './ngoeditcourse';

@Injectable({
  providedIn: 'root'
})
export class NgoeditcourseService {

  constructor(private http:HttpClient) { }
  ngoeditcourse(editcourse : Ngoeditcourse):Observable<any>{
    let url='http://localhost:8080/editCourse';
    return this.http.post<any>(url,editcourse);
  }
}
