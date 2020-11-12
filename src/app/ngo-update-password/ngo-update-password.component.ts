import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordChange } from '../passwordChange';
import{NgoChangePassService} from '../ngo-change-pass.service' ;

@Component({
  selector: 'app-ngo-update-password',
  templateUrl: './ngo-update-password.component.html',
  styleUrls: ['./ngo-update-password.component.css']
})
export class NgoUpdatePasswordComponent implements OnInit {
message:string;
  confirmPass : string ;
  confirmPassCheckMessage : string ;
  newPassInput : PasswordChange = new PasswordChange() ;
  constructor(private ngoChangePassService : NgoChangePassService , private router : Router) { }

  ngOnInit(): void {
  }

  updateNGOPassword(){
    if(this.newPassInput.password != this.confirmPass){
      this.confirmPassCheckMessage = "New Password does not match with Confirm Password " ;
    }
    else{
      this.ngoChangePassService.ngoChangePass(this.newPassInput).subscribe(data=>{
        if(data.status == 'SUCCESS'){
          this.router.navigate(['ngologinLink']) ;
        } 
        else{
          this.message=data.message;
        }
      })
     
    }
  }

}
