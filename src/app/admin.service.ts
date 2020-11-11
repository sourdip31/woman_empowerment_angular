import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AddAccomodation  } from "./addaccomodation";
import { Observable } from 'rxjs';
import {AccomodationStatus} from './accomodationstatus';
import {ViewAccomodation} from './viewaccomodations';
import {UpdateAccomodation} from './updateaccomodation';
import {Course} from './course';
import {ViewEnrollments} from './enroll';
import {ViewNGO} from './ngo';
import {ViewSY} from './admin/users/viewsy/sukanyayojna';
import { Users } from './users';
import{EnrollmentStatus} from './enrollmentstatus';
import {NgoStatus} from './ngostatus';
import {NgoApproval} from './ngoapproval';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }
 addAccomodation(accomodation:AddAccomodation):Observable<AccomodationStatus>{
    let url='http://localhost:8080/addHome';
    return this.http.post<AccomodationStatus>(url,accomodation);
  }

  updateAccomodation(accomodation:UpdateAccomodation):Observable<AccomodationStatus>{
    let url='http://localhost:8080/updateHome';
    return this.http.post<AccomodationStatus>(url,accomodation);
  }

  viewAccomodation():Observable<ViewAccomodation[]>{
    let url='http://localhost:8080/viewAllAccomodations';
    return this.http.get<ViewAccomodation[]>(url);
  }

  viewCourses():Observable<Course[]>{
    let url='http://localhost:8080/viewAllCourses';
    return this.http.get<Course[]>(url);
  }

  viewEnrollments():Observable<ViewEnrollments[]>{
    let url='http://localhost:8080/viewAllEnrollments';
    return this.http.get<ViewEnrollments[]>(url);
  }

  viewNGO():Observable<ViewNGO[]>{
    let url='http://localhost:8080/viewAllNGOs';
    return this.http.get<ViewNGO[]>(url);
  }

  viewSY():Observable<ViewSY[]>{
    let url='http://localhost:8080/viewAllSukanyas';
    return this.http.get<ViewSY[]>(url);
  }

  viewUsers():Observable<Users[]>{
    let url='http://localhost:8080/viewAllUsers';
    return this.http.get<Users[]>(url);
  }

approveEnrollments():Observable<EnrollmentStatus>{
  let url='http://localhost:8080/approveEnroll';
  return this.http.get<EnrollmentStatus>(url);

  
}

approveAccomodation():Observable<EnrollmentStatus>{
  let url='http://localhost:8080/approveAccomodation';
  return this.http.get<EnrollmentStatus>(url);

  
}

approveSY():Observable<EnrollmentStatus>{
  let url='http://localhost:8080/approveSukanya';
  return this.http.get<EnrollmentStatus>(url);

  
}

approveNGO(approve:NgoApproval):Observable<NgoStatus>{
  let url='http://localhost:8080/approveNGO';
  return this.http.post<NgoStatus>(url,approve);

}

}
