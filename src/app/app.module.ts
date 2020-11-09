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
import { AdminloginfailComponent } from './adminloginfail/adminloginfail.component';
import { NgoAboutusComponent } from './ngo-aboutus/ngo-aboutus.component';
import { ViewComponent } from './admin/ngo/view/view.component';
import { ApproveComponent } from './admin/ngo/approve/approve.component';
import { ApproveSYComponent } from './admin/users/approve-sy/approve-sy.component';
import { CoursesComponent } from './admin/courses/courses.component';
import { UsersComponent } from './admin/users/users.component';
import { UsersviewComponent } from './admin/users/usersview/usersview.component';
import { CoursesviewComponent } from './admin/courses/coursesview/coursesview.component';
import { ViewsyComponent } from './admin/users/viewsy/viewsy.component';
import { ViewenrollmentsComponent } from './admin/courses/viewenrollments/viewenrollments.component';
import { ApproveenrollmentsComponent } from './admin/courses/approveenrollments/approveenrollments.component';
import { AccomodationComponent } from './admin/accomodation/accomodation.component';
import { AddaccomodationComponent } from './admin/accomodation/addaccomodation/addaccomodation.component';

import { ApproveaccomodationComponent } from './admin/accomodation/approveaccomodation/approveaccomodation.component';
import { ViewaccomodationComponent } from './admin/accomodation/viewaccomodation/viewaccomodation.component';
import { UpdateaccomodationComponent } from './admin/accomodation/updateaccomodation/updateaccomodation.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';


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
    AdminloginfailComponent,
    NgoAboutusComponent,
    ViewComponent,
    ApproveComponent,
   ApproveSYComponent,
 CoursesComponent,
    UsersComponent,
    UsersviewComponent,
   CoursesviewComponent,
  ViewsyComponent,
    ViewenrollmentsComponent,
    ApproveenrollmentsComponent,
    AccomodationComponent,
    AddaccomodationComponent,
    
    ApproveaccomodationComponent,
    ViewaccomodationComponent,
    UpdateaccomodationComponent,
    AdminforgotpasswordComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserloginService, RegisteruserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
