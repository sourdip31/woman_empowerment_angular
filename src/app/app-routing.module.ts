import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{StephomeComponent} from './stephome/stephome.component';
<<<<<<< HEAD
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';
=======
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { NgohomeComponent } from './ngohome/ngohome.component';
import { NgologinComponent } from './ngologin/ngologin.component';


>>>>>>> 5d80d3532ea45a9eefb3e1605fb25d8c16417707


const routes: Routes = [
  {path: '',component: StephomeComponent},
<<<<<<< HEAD
  {path:'stephomeLink', component: StephomeComponent},
  {path: 'userloginLink', component: UserloginComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
  {path: 'userRegister',component: UserRegisterComponent}

=======
  {path: 'stephomeLink',component:StephomeComponent},
  {path: 'ngohomeLink', component:NgohomeComponent},
  {path:'adminloginLink',component:AdminloginComponent},
  {path:'ngologinLink',component:NgologinComponent},
  
>>>>>>> 5d80d3532ea45a9eefb3e1605fb25d8c16417707
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
