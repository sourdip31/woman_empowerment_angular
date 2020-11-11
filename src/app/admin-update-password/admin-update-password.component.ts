import { Component, OnInit } from '@angular/core';
import { PasswordChange } from '../passwordChange';
import {AdminChangePassService} from '../admin-change-pass.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-update-password',
  templateUrl: './admin-update-password.component.html',
  styleUrls: ['./admin-update-password.component.css']
})
export class AdminUpdatePasswordComponent implements OnInit {

  confirmPass : string ;
  confirmPassCheckMessage : string ;
  newPassInput : PasswordChange = new PasswordChange() ;
 
  constructor(private adminChangePassService : AdminChangePassService , private router : Router) { }

  ngOnInit(): void {
  }

  updateUserPasswordAdmin(){
    if(this.newPassInput.password != this.confirmPass){
      this.confirmPassCheckMessage = "New Password does not match with Confirm Password " ;
    }
    else{
      this.adminChangePassService.adminChangePass(this.newPassInput).subscribe(data=>{
        if(data.status == 'SUCCESS'){
          this.router.navigate(['adminloginLink']) ;
        } 
      })
    }
  }



}
