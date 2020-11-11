import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewNGO } from './ngo';
import { NgoId } from './ngoid';

@Injectable({
  providedIn: 'root'
})
export class NgoprofileService {

  constructor(private http:HttpClient) { }
  ngoProfile(ngoid:NgoId):Observable<any>{
    let url = "http://localhost:8080/findANGO" ;
    return this.http.post<any>(url,ngoid) ;
  }
}
