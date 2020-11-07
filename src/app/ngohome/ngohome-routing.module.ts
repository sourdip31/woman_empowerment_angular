import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgologinComponent} from '../ngologin/ngologin.component';

const routes: Routes = [{path:'ngoLogin',component:NgologinComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgohomeRoutingModule { }
