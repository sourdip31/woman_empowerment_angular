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








import{NgoRegisterComponent} from './ngo-register/ngo-register.component';
import { NgocriteriaComponent } from './ngocriteria/ngocriteria.component';
import { NgofaqComponent } from './ngofaq/ngofaq.component';
import { NgoaddcoursesComponent } from './ngoaddcourses/ngoaddcourses.component';
import { NgoorganizationsComponent } from './ngoorganizations/ngoorganizations.component';
import { NgoaddcourseformComponent } from './ngoaddcourseform/ngoaddcourseform.component';
import { NgoeditcourseComponent } from './ngoeditcourse/ngoeditcourse.component';
import { NgodeletecourseComponent } from './ngodeletecourse/ngodeletecourse.component';
import { NgoregisterstatusComponent } from './ngoregisterstatus/ngoregisterstatus.component';
import { ViewallcoursesComponent } from './viewallcourses/viewallcourses.component';

const routes: Routes = [
  {path: '',component: StephomeComponent},
  
  {path: 'userloginLink', component: UserloginComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
  {path:'ngoRegisterLink',component:NgoRegisterComponent},
  {path: 'userRegister',component: UserRegisterComponent},
  {path:'ngofaqLink',component:NgofaqComponent},
  {path:'adminloginLink',component:AdminloginComponent},
  {path:'ngologinLink',component:NgologinComponent},
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
