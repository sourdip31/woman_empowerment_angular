import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgoLogin} from '../ngologin';
import{ NgologinService } from '../ngologin.service';

@Component({
  selector: 'app-ngologin',
  templateUrl: './ngologin.component.html',
  styleUrls: ['./ngologin.component.css']
})
export class NgologinComponent  {

  login1: NgoLogin = new NgoLogin();
  message: string;
  
  constructor(private ngoLoginService: NgologinService, private router: Router) { }


 
  checkLoginNgo() {
    //alert(JSON.stringify(this.login1));
    this.ngoLoginService.login1(this.login1).subscribe(data1 => {
     // alert(JSON.stringify(data1));
      if(data1.status == 'SUCCESS') {
        console.log(data1.id);
        let ngoId = data1.id;
        let ngoName = data1.name;
        console.log(ngoId);
       sessionStorage.setItem('ngoIdOrg', String(ngoId));
        sessionStorage.setItem('ngoNameOrg', ngoName);
        this.router.navigate(['addcoursesLink']);
      }
      else {
        this.message = data1.message;
      }
    })

  }
}
