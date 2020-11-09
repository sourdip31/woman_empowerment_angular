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

import { AccomodationComponent } from './admin/accomodation/accomodation.component';
import { ApproveaccomodationComponent } from './admin/accomodation/approveaccomodation/approveaccomodation.component';
import { ViewaccomodationComponent } from './admin/accomodation/viewaccomodation/viewaccomodation.component';
import { UpdateaccomodationComponent } from './admin/accomodation/updateaccomodation/updateaccomodation.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';


const routes: Routes = [
  {path: '',component: StephomeComponent},
 {path:'failLink',component:AdminloginfailComponent},
  {path:'stephomeLink', component: StephomeComponent},
{path: 'userloginLink', component: UserloginComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
{path: 'userRegister',component: UserRegisterComponent},
 {path:'adminloginLink',component:AdminloginComponent},
  {path:'ngologinLink',component:NgologinComponent},
{path:'ngoaboutusLink',component:NgoAboutusComponent},
 {path: 'ngohomeLink', component:NgohomeComponent},
  {path:'adminloginLink',component:AdminloginComponent},
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
{path:'adminFPLink',component:AdminforgotpasswordComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
