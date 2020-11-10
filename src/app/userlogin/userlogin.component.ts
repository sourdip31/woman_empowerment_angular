import { Component, OnInit } from '@angular/core';
import {UserLogin} from '../userlogin';
import {UserLoginStatus} from '../user-login-status' ;
import {UserloginService} from '../userlogin.service' ;
import {Router} from '@angular/router' ;

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  login: UserLogin = new UserLogin();
  //ls : UserLoginStatus = new UserLoginStatus() ;
  message: string;
  
  constructor(private userLoginService: UserloginService, private router: Router) { }


  checkLoginUser() {
    alert(JSON.stringify(this.login));
    this.userLoginService.login(this.login).subscribe(data => {
      alert(JSON.stringify(data));
      //this.ls = data ;
      //console.log(this.ls.userId+" "+data.userId) ;
      //console.log("Outside IF") ;
      //console.log(this.ls.userId) ;
      
      if(data.status == 'SUCCESS') {
        let userId = data.id;
        let userName = data.name;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem("userId", String(userId));
        
        sessionStorage.setItem('userName', userName);
        console.log("Session Storage SET") ;
        console.log(sessionStorage.getItem("userId")) ;
        this.router.navigate(['stepAboutUsLink']);
      }
      else {
        this.message = data.message;
      }
    })

  }
}
