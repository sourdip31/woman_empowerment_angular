import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{StephomeComponent} from './stephome/stephome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { NgohomeComponent } from './ngohome/ngohome.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginfailComponent } from './adminloginfail/adminloginfail.component';




const routes: Routes = [
  {path: '',component: StephomeComponent},
  {path: 'stephomeLink',component:StephomeComponent},
  {path:'ngohomeLink', component:NgohomeComponent},
  {path:'ngologinLink',component:NgologinComponent},
  {path:'adminloginLink',component:AdminloginComponent},
  {path:'adminhomeLink',component:AdminhomeComponent},
  {path:'failLink',component:AdminloginfailComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
