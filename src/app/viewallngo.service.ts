import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewNGO } from './ngo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewallngoService {

  constructor(private http:HttpClient) { }

  viewNGO():Observable<ViewNGO[]>{
    let url = "http://localhost:8080/viewAllNGOs" ;
    return this.http.get<ViewNGO[]>(url) ;
  }
}
