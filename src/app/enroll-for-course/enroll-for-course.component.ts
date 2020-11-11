import { Component, OnInit } from '@angular/core';
import{ViewNGO} from '../view-ngo';
import {RegisterWithNGO} from '../registerwithNGO' ;
import{ViewNGOsService} from '../view-ngos.service';
import{RegisterWithNgoService} from '../register-with-ngo.service';
import {ViewCourseByNGOIdService} from '../view-course-by-ngoid.service';

import { Router } from '@angular/router';
import{Course} from '../course' ;
import {NgoId} from '../ngoid' ;

@Component({
  selector: 'app-enroll-for-course',
  templateUrl: './enroll-for-course.component.html',
  styleUrls: ['./enroll-for-course.component.css']
})
export class EnrollForCourseComponent implements OnInit {

  ngo: Array<ViewNGO>=[];
  isNGOView: boolean = false ;
  isShowCousebyNGO : boolean = false ;
  storeCourseId : number ;
  registerUserWithNgo : RegisterWithNGO = new RegisterWithNGO() ;
  registermessage : string ;
  courses : Array<Course>=[] ;
  ngoid : NgoId = new NgoId();


  constructor(private viewNgosService:ViewNGOsService , private registerwithngoService : RegisterWithNgoService , private viewCourseByNgoid : ViewCourseByNGOIdService, private router : Router) { }

  ngOnInit(): void {
    console.log(sessionStorage.getItem('userId'));
  }

  viewNGOs(){
    this.isNGOView = true ;

    this.viewNgosService.viewNGO().subscribe(data=>{
      this.ngo = data;
    })
  }

  registerWithAnNGO(){
    this.registerUserWithNgo.userId = Number(sessionStorage.getItem('userId'));
    alert(JSON.stringify(this.registerUserWithNgo));
    this.registerwithngoService.registerWithNgo(this.registerUserWithNgo).subscribe(data=>{
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS'){
        console.log(data.ngoId) ;
        let ngoID = this.registerUserWithNgo.ngoId ;
        sessionStorage.setItem('ngoId', String(ngoID));
        this.isShowCousebyNGO = true ;
        console.log(sessionStorage.getItem('ngoId')) ;
        this.ngoid.ngoId = this.registerUserWithNgo.ngoId;
        this.viewCourseByNgoid.viewCourseByNgoId(this.ngoid).subscribe(data1=>{
          this.courses = data1 ; 
        })
      }

      else{
        this.registermessage = data.message ;
      }
    })
  }


  getCoursAndNRedirect(){
    sessionStorage.setItem('courseId', String(this.storeCourseId) ) ;
    console.log(sessionStorage.getItem('courseId')) ;
    this.router.navigate(['couserEnrollFormLink']) ;
  }

}
