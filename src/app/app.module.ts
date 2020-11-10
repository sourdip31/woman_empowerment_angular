import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StephomeComponent } from './stephome/stephome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserloginService } from './userlogin.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RegisteruserService } from './registeruser.service';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import { NgoAboutusComponent } from './ngo-aboutus/ngo-aboutus.component';
import { StepAboutUsComponent } from './step-about-us/step-about-us.component';
import { StepTrainingSectorsComponent } from './step-training-sectors/step-training-sectors.component';
import { NgoRegisterComponent } from './ngo-register/ngo-register.component';
import { NgocriteriaComponent } from './ngocriteria/ngocriteria.component';
import { NgofaqComponent } from './ngofaq/ngofaq.component';
import { NgoaddcoursesComponent } from './ngoaddcourses/ngoaddcourses.component';
import { NgologinService } from './ngologin.service';
import { RegisterngoService } from './registerngo.service';


import{ ViewCourseBySectorService } from './view-course-by-sector.service';
import { EnrollForCourseComponent } from './enroll-for-course/enroll-for-course.component' ;
import { ViewNGOsService } from './view-ngos.service';
import { WeEmpowerHomeComponent } from './we-empower-home/we-empower-home.component';
import { CourseEnrollmentFormComponent } from './course-enrollment-form/course-enrollment-form.component';
import { WelfareSchemeComponent } from './welfare-scheme/welfare-scheme.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { SukanyayojnaComponent } from './sukanyayojna/sukanyayojna.component';
import { SukanyaYojanaComponent } from './sukanya-yojana/sukanya-yojana.component' ;
@NgModule({
  declarations: [
    AppComponent,
    StephomeComponent,
    NgohomeComponent,
    AdminhomeComponent,
    UserloginComponent,
    UserRegisterComponent,
    AdminloginComponent,
    NgologinComponent,
    NgoAboutusComponent,
    NgoRegisterComponent,
    NgocriteriaComponent,
    NgofaqComponent,
    NgoaddcoursesComponent,
    StepAboutUsComponent,
    StepTrainingSectorsComponent,
    NgoRegisterComponent,
    EnrollForCourseComponent,
    WeEmpowerHomeComponent,
    CourseEnrollmentFormComponent,
    WelfareSchemeComponent,
    AccomodationComponent,
    SukanyayojnaComponent,
    SukanyaYojanaComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserloginService, RegisteruserService , ViewCourseBySectorService,NgologinService,RegisterngoService, ViewNGOsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
