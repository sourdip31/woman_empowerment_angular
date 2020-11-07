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
import { FormsModule } from '@angular/forms';


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
    AdminloginfailComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    RouterModule,
    FormsModule,
    HttpClientModule
>>>>>>> 47286976e7ec484243527f4792fea53aafa16bcd
  ],
  providers: [UserloginService, RegisteruserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
