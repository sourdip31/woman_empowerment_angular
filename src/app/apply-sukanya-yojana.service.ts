import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SukanyaYojana } from './sukanyayojana';
import { SukanyaYojanaStatus } from './sukanyayojana-status';

@Injectable({
  providedIn: 'root'
})
export class ApplySukanyaYojanaService {

  constructor(private http:HttpClient) { }
  usersukanya(usersukanya : SukanyaYojana):Observable<SukanyaYojanaStatus>{
    let url='http://localhost:8080/applySukanya';
    return this.http.post<SukanyaYojanaStatus>(url,usersukanya);
  }
}
