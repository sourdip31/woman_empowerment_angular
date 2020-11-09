import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{SectorName} from './sectorname' ;
import{Course} from './course';


@Injectable({
  providedIn: 'root'
})
export class ViewCourseBySectorService {

  constructor(private http:HttpClient) { }
  viewCourseBySector(sectorname : SectorName):Observable<Course[]>{
    let url = "http://localhost:8080/viewCoursesBySector" ;
    return this.http.post<Course[]>(url,sectorname) ;
  }
}
