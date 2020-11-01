import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StephomeComponent } from './stephome/stephome.component';
import { NgohomeComponent } from './ngohome/ngohome.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    StephomeComponent,
    NgohomeComponent,
    AdminhomeComponent,
    AdminloginComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
