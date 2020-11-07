import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';


import { AdminloginfailComponent } from './adminloginfail/adminloginfail.component';


import{StephomeComponent} from './stephome/stephome.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {NgologinComponent} from './ngologin/ngologin.component' ;
import {AdminloginComponent} from './adminlogin/adminlogin.component' ;


const routes: Routes = [
  {path: '',component: StephomeComponent},
 {path:'failLink',component:AdminloginfailComponent},
  {path:'stephomeLink', component: StephomeComponent},
  {path: 'userloginLink', component: UserloginComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
  {path: 'ngohomeLink', component:NgohomeComponent},
  {path:'adminloginLink',component:AdminloginComponent},
  {path:'ngologinLink',component:NgologinComponent},
  {path: 'userRegister',component: UserRegisterComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
