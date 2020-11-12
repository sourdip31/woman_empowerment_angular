import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteruserService } from '../registeruser.service';
import { UserRegister } from '../user-register';
import {EnrollFormData} from '../enroll-course-data' ;
import{CourseEnrollmentService} from '../course-enrollment.service' ;

@Component({
  selector: 'app-course-enrollment-form',
  templateUrl: './course-enrollment-form.component.html',
  styleUrls: ['./course-enrollment-form.component.css']
})
export class CourseEnrollmentFormComponent implements OnInit {

  enrolldata : EnrollFormData = new EnrollFormData() ;
  sessionUserId : number = Number(sessionStorage.getItem('userId'));
  sessionCourseId : number = Number(sessionStorage.getItem('courseId')) ;


  constructor(private  courseEnrollService : CourseEnrollmentService, private router:Router ) { }
  enrollmessage : string ;
  ngOnInit(): void {
  }

  enrollForCourse() {
    this.enrolldata.userId = Number(sessionStorage.getItem('userId'));
    this.enrolldata.courseId = Number(sessionStorage.getItem('courseId')) ;
    

    this.courseEnrollService.courseEnroll(this.enrolldata).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.enrollmessage = data.message ;
        this.router.navigate(['stepAboutUsLink']) ; 

      }
      else {
        this.enrollmessage = data.message ;
      }
    })
  }


}
