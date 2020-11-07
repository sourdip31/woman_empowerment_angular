import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
<<<<<<< HEAD
import { NgologinComponent } from './ngologin/ngologin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginfailComponent } from './adminloginfail/adminloginfail.component';

=======
>>>>>>> 47286976e7ec484243527f4792fea53aafa16bcd

import{StephomeComponent} from './stephome/stephome.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import {NgologinComponent} from './ngologin/ngologin.component' ;
import {AdminloginComponent} from './adminlogin/adminlogin.component' ;


const routes: Routes = [
  {path: '',component: StephomeComponent},
<<<<<<< HEAD
  {path: 'stephomeLink',component:StephomeComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'ngologinLink',component:NgologinComponent},
  {path:'adminloginLink',component:AdminloginComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
  {path:'failLink',component:AdminloginfailComponent}
=======
  {path:'stephomeLink', component: StephomeComponent},
  {path: 'userloginLink', component: UserloginComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
  {path: 'ngohomeLink', component:NgohomeComponent},
  {path:'adminloginLink',component:AdminloginComponent},
  {path:'ngologinLink',component:NgologinComponent},
  {path: 'userRegister',component: UserRegisterComponent}

>>>>>>> 47286976e7ec484243527f4792fea53aafa16bcd
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
