import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ViewNGO } from './view-ngo';

@Injectable({
  providedIn: 'root'
})
export class ViewNGOsService {

  constructor(private http: HttpClient) { }
  viewNGO():Observable<ViewNGO[]>{
    let url='http://localhost:8080/viewAllNGOs';
    return this.http.get<ViewNGO[]>(url);
  }
}
