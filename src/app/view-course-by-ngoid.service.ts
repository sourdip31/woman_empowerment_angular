import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {NgoId} from './ngoid' ;
import{Course} from './course';

@Injectable({
  providedIn: 'root'
})
export class ViewCourseByNGOIdService {

  constructor(private http:HttpClient) { }

  viewCourseByNgoId(ngoid : NgoId): Observable<Course[]>{
    let url = "http://localhost:8080/viewCoursesByNGO" ;
    return this.http.post<Course[]>(url,ngoid) ;
  }
}
