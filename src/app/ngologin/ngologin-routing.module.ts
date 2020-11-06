import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgologinComponent } from './ngologin.component';

const routes: Routes = [{path:'ngologinLink',component:NgologinComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgologinRoutingModule { }
