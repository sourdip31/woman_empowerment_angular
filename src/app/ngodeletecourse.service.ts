import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{Ngodeletecourse} from './ngodeletecourse';

@Injectable({
  providedIn: 'root'
})
export class NgodeletecourseService {

  constructor(private http:HttpClient) { }
  ngodeletecourse(deletecourse : Ngodeletecourse):Observable<any>{
    let url='http://localhost:8080/deleteCourse';
    return this.http.post<any>(url,deletecourse);
  }
}
