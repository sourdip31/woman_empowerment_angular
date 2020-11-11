import { Component, OnInit } from '@angular/core';
import{GetEmail} from '../getEmail' ;
import{GetOtp} from '../getOtp';
import {GenerateOTPService} from '../generate-otp.service' ;
import{VerifyOTPService} from '../verify-otp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-generate-nverify-otp',
  templateUrl: './generate-nverify-otp.component.html',
  styleUrls: ['./generate-nverify-otp.component.css']
})
export class GenerateNVerifyOtpComponent implements OnInit {
  otpGenerateMessage : string ;
  getEmailId : GetEmail = new GetEmail() ;
  getOTP : GetOtp = new GetOtp() ;
  constructor(private generateOtpService : GenerateOTPService , private verifyOtpService : VerifyOTPService , private router : Router  ) { }
  
  ngOnInit(): void {
  }

  generateOTPnumber(){
    this.generateOtpService.generateOtp(this.getEmailId).subscribe(data=>{
        if(data.status == 'SUCCESS'){
          this.otpGenerateMessage = "OTP Sent to your Mail Id" ;
        }
    })
    
  }

  verifyOTPnumber(){
    this.verifyOtpService.verifyOtp(this.getOTP).subscribe(data1 =>{
      if(data1.status == 'SUCCESS'){
        this.router.navigate(['userUpdatePasswordLink']) ;
      }
    })
  }

}
