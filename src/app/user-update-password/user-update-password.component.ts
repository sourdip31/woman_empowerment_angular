import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PasswordChange} from '../passwordChange';
import{UserChangePassService} from '../user-change-pass.service';

@Component({
  selector: 'app-user-update-password',
  templateUrl: './user-update-password.component.html',
  styleUrls: ['./user-update-password.component.css']
})
export class UserUpdatePasswordComponent implements OnInit {
message:string;
  confirmPass : string ;
  confirmPassCheckMessage : string ;
  newPassInput : PasswordChange = new PasswordChange() ;
  constructor(private userChangePassService : UserChangePassService , private router : Router) { }

  ngOnInit(): void {
  }

  updateUserPassword(){
    if(this.newPassInput.password != this.confirmPass){
      this.confirmPassCheckMessage = "New Password does not match with Confirm Password " ;
    }
    else{
      this.userChangePassService.userChangePass(this.newPassInput).subscribe(data=>{
        if(data.status == 'SUCCESS'){
          this.router.navigate(['userloginLink']) ;
        } 
        else{
          this.message=data.message;
        }
      })
    }
  }

}
