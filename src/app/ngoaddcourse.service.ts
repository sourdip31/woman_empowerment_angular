import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Ngoaddcourse} from './ngoaddcourse';
@Injectable({
  providedIn: 'root'
})
export class NgoaddcourseService {

  constructor(private http:HttpClient) { }
  ngoaddcourse(addcourse : Ngoaddcourse):Observable<any>{
    let url='http://localhost:8080/addCourse';
    return this.http.post<any>(url,addcourse);
  }

  
}
