import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateOTPService } from '../generate-otp.service';
import{GetEmail} from '../getEmail' ;
import{GetOtp} from '../getOtp';
import { VerifyOTPService } from '../verify-otp.service';


@Component({
  selector: 'app-generate-nverify-otp-ngo',
  templateUrl: './generate-nverify-otp-ngo.component.html',
  styleUrls: ['./generate-nverify-otp-ngo.component.css']
})
export class GenerateNVerifyOtpNgoComponent implements OnInit {
  otpGenerateMessage : string ;
  getEmailId : GetEmail = new GetEmail() ;
  getOTP : GetOtp = new GetOtp() ;
  constructor(private generateOtpService : GenerateOTPService , private verifyOtpService : VerifyOTPService , private router : Router ) { }

  ngOnInit(): void {
  }

  generateOTPnumberNgo(){
    this.generateOtpService.generateOtpNgo(this.getEmailId).subscribe(data=>{
        if(data.status == 'SUCCESS'){
          this.otpGenerateMessage = "OTP Sent to your Mail Id" ;
        }
    })
    
  }

  verifyOTPnumberNgo(){
    this.verifyOtpService.verifyOtpNgo(this.getOTP).subscribe(data2 =>{
      console.log(this.getOTP.otp) ;
      console.log(data2.status) ;
      if(data2.status == 'SUCCESS'){
        this.router.navigate(['stepAboutUsLink']) ;
      }
    })
  }

}
