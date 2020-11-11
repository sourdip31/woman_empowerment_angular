import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateOTPService } from '../generate-otp.service';
import { GetEmail } from '../getEmail';
import { GetOtp } from '../getOtp';
import { VerifyOTPService } from '../verify-otp.service';

@Component({
  selector: 'app-generate-nverify-otp-admin',
  templateUrl: './generate-nverify-otp-admin.component.html',
  styleUrls: ['./generate-nverify-otp-admin.component.css']
})
export class GenerateNVerifyOtpAdminComponent implements OnInit {

  otpGenerateMessage : string ;
  getEmailId : GetEmail = new GetEmail() ;
  getOTP : GetOtp = new GetOtp() ;
  constructor(private generateOtpService : GenerateOTPService , private verifyOtpService : VerifyOTPService , private router : Router  ) { }
  
  ngOnInit(): void {
  }

  generateOTPnumberAdmin(){
    this.generateOtpService.generateOtpAdmin(this.getEmailId).subscribe(data=>{
        if(data.status == 'SUCCESS'){
          this.otpGenerateMessage = "OTP Sent to your Mail Id" ;
        }
    })
    
  }

  verifyOTPnumberAdmin(){
    this.verifyOtpService.verifyOtpAdmin(this.getOTP).subscribe(data1 =>{
      if(data1.status == 'SUCCESS'){
        this.router.navigate(['adminUpdatePasswordLink']) ;
      }
    })
  }

}
