import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accomodation } from './accomodation';
import { AccomodationStatus } from './accomodation-status';

@Injectable({
  providedIn: 'root'
})
export class AccomodationServiceService {

  constructor(private http:HttpClient) { }
  useraccomodation(useraccomodation : Accomodation):Observable<AccomodationStatus>{
    let url='http://localhost:8080/applyAccomodation';
    return this.http.post<AccomodationStatus>(url,useraccomodation);
  }
}
