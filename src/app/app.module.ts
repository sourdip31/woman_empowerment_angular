import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StephomeComponent } from './stephome/stephome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
<<<<<<< HEAD
import { UserloginComponent } from './userlogin/userlogin.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { UserloginService } from './userlogin.service';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RegisteruserService } from './registeruser.service';
=======
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgologinComponent } from './ngologin/ngologin.component';

>>>>>>> 5d80d3532ea45a9eefb3e1605fb25d8c16417707

@NgModule({
  declarations: [
    AppComponent,
    StephomeComponent,
    NgohomeComponent,
    AdminhomeComponent,
<<<<<<< HEAD
    UserloginComponent,
    UserRegisterComponent,
=======
    AdminloginComponent,
    NgologinComponent
 
>>>>>>> 5d80d3532ea45a9eefb3e1605fb25d8c16417707
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
