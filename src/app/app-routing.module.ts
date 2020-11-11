import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
import { AdminloginfailComponent } from './adminloginfail/adminloginfail.component';
import{StephomeComponent} from './stephome/stephome.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import {NgoAboutusComponent } from './ngo-aboutus/ngo-aboutus.component';
import { ViewComponent } from './admin/ngo/view/view.component';
import { ApproveComponent } from './admin/ngo/approve/approve.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { UsersComponent } from './admin/users/users.component';
import { ApproveSYComponent } from './admin/users/approve-sy/approve-sy.component';
import { UsersviewComponent } from './admin/users/usersview/usersview.component';
import { CoursesviewComponent } from './admin/courses/coursesview/coursesview.component';
import { ViewenrollmentsComponent } from './admin/courses/viewenrollments/viewenrollments.component';
import { ViewsyComponent } from './admin/users/viewsy/viewsy.component';
import { ApproveenrollmentsComponent } from './admin/courses/approveenrollments/approveenrollments.component';
import { AddaccomodationComponent } from './admin/accomodation/addaccomodation/addaccomodation.component';


import { ApproveaccomodationComponent } from './admin/accomodation/approveaccomodation/approveaccomodation.component';
import { ViewaccomodationComponent } from './admin/accomodation/viewaccomodation/viewaccomodation.component';
import { UpdateaccomodationComponent } from './admin/accomodation/updateaccomodation/updateaccomodation.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { StepAboutUsComponent } from './step-about-us/step-about-us.component';
import { StepTrainingSectorsComponent } from './step-training-sectors/step-training-sectors.component';
import{WeEmpowerHomeComponent} from './we-empower-home/we-empower-home.component' ;
import {CourseEnrollmentFormComponent} from './course-enrollment-form/course-enrollment-form.component' ;
import { WelfareSchemeComponent } from './welfare-scheme/welfare-scheme.component';
import { ApplyAccomodationComponent } from './apply-accomodation/accomodation.component';
import {AccomodationComponent} from './admin/accomodation/accomodation.component';
import { SukanyaYojanaComponent} from './sukanya-yojana/sukanya-yojana.component';



import{NgoRegisterComponent} from './ngo-register/ngo-register.component';
import { EnrollForCourseComponent } from './enroll-for-course/enroll-for-course.component';
import { NgocriteriaComponent } from './ngocriteria/ngocriteria.component';
import { NgofaqComponent } from './ngofaq/ngofaq.component';
import { NgoaddcoursesComponent } from './ngoaddcourses/ngoaddcourses.component';
import { NgoorganizationsComponent } from './ngoorganizations/ngoorganizations.component';
import { NgoaddcourseformComponent } from './ngoaddcourseform/ngoaddcourseform.component';
import { NgoeditcourseComponent } from './ngoeditcourse/ngoeditcourse.component';
import { NgodeletecourseComponent } from './ngodeletecourse/ngodeletecourse.component';
import { NgoregisterstatusComponent } from './ngoregisterstatus/ngoregisterstatus.component';
import { ViewallcoursesComponent } from './viewallcourses/viewallcourses.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

const routes: Routes = [
  {path: '',component: StephomeComponent},
 {path:'failLink',component:AdminloginfailComponent},
  {path:'stephomeLink', component: StephomeComponent},
{path: 'userloginLink', component: UserloginComponent},

  {path: '',component: WeEmpowerHomeComponent},
  {path: 'weEmpowerHomeLink' , component: WeEmpowerHomeComponent } ,
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},

 
  
{path:'ngoaboutusLink',component:NgoAboutusComponent},

  
  {path:'ngologinLink',component:NgologinComponent},
  {path: 'userRegister',component: UserRegisterComponent},
  {path:'admin/ngo/view',component:ViewComponent},
  {path:'admin/ngo/approve',component:ApproveComponent},
{path:'admin/courses',component:CoursesComponent},
 {path:'admin/courses/coursesview',component:CoursesviewComponent},
 {path:'admin/courses/viewenrollments',component:ViewenrollmentsComponent},
 {path:'admin/courses/approveenrollments',component:ApproveenrollmentsComponent},
{path:'admin/users',component:UsersComponent},
 {path:'admin/users/usersview',component:UsersviewComponent},
  {path:'admin/users/approve-sy',component:ApproveSYComponent},
  {path:'admin/users/viewsy',component:ViewsyComponent},
  {path:'admin/accomodation',component:AccomodationComponent},
  {path:'admin/accomodation/approveaccomodation',component:ApproveaccomodationComponent},
{path:'admin/accomodation/addaccomodation',component:AddaccomodationComponent},
{path:'admin/accomodation/updateaccomodation',component:UpdateaccomodationComponent},
{path:'admin/accomodation/viewaccomodation',component:ViewaccomodationComponent},
{path:'adminFPLink',component:AdminforgotpasswordComponent},
  {path:'ngoRegisterLink',component:NgoRegisterComponent},
 
  {path:'ngofaqLink',component:NgofaqComponent},
  {path:'adminloginLink',component:AdminloginComponent},
 
  {path:'ngocriteriaLink',component:NgocriteriaComponent},
  {path:'ngoaboutusLink',component:NgoAboutusComponent},
  {path:'addcoursesLink',component:NgoaddcoursesComponent},
  {path: 'userRegister',component: UserRegisterComponent},
  {path: 'ngologinLink',component:NgologinComponent},
  {path:'ngoOrganizationsLink',component:NgoorganizationsComponent},
  {path:'ngoaddcourseformLink',component:NgoaddcourseformComponent},
  {path:'ngoeditcourseLink',component:NgoeditcourseComponent},
  {path:'ngodeletecourseLink',component:NgodeletecourseComponent},
  {path:'ngoregisterstatusLink',component:NgoregisterstatusComponent},
  {path:'stepAboutUsLink' , component:StepAboutUsComponent},
  {path: 'trainingSectorsLink' , component:StepTrainingSectorsComponent},
  {path:'ngoviewallcoursesLink',component:ViewallcoursesComponent},

  {path:'addcoursesLink',component:NgoaddcoursesComponent},
 
{path:'changepwdLink',component:ChangepasswordComponent},


  {path:'stepAboutUsLink' , component:StepAboutUsComponent},
  {path: 'trainingSectorsLink' , component:StepTrainingSectorsComponent},
  {path : 'stepEnrollLink' , component:EnrollForCourseComponent},
  {path : 'couserEnrollFormLink' , component : CourseEnrollmentFormComponent },
  {path: 'welfareSchemesLink' , component:WelfareSchemeComponent},
  {path: 'accomodationLink' , component:ApplyAccomodationComponent},
  {path: 'sukanyaLink' , component:SukanyaYojanaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
