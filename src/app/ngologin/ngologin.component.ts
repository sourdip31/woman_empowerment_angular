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

  login: NgoLogin = new NgoLogin();
  message: string;
  
  constructor(private ngoLoginService: NgologinService, private router: Router) { }


  checkLoginUser() {
    alert(JSON.stringify(this.login));
    this.ngoLoginService.login(this.login).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        let userId = data.userId;
        let userName = data.userName;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem('userId', String(userId));
        sessionStorage.setItem('userName', userName);
        this.router.navigate(['stephomeLink']);
      }
      else {
        this.message = data.message;
      }
    })

  }
}
