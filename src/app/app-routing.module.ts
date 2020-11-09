import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';

import{StephomeComponent} from './stephome/stephome.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserloginComponent } from './userlogin/userlogin.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import {NgoAboutusComponent } from './ngo-aboutus/ngo-aboutus.component';
import { StepAboutUsComponent } from './step-about-us/step-about-us.component';
import { StepTrainingSectorsComponent } from './step-training-sectors/step-training-sectors.component';









const routes: Routes = [
  {path: '',component: StephomeComponent},
  
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

  {path:'stepAboutUsLink' , component:StepAboutUsComponent},
  {path: 'trainingSectorsLink' , component:StepTrainingSectorsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
