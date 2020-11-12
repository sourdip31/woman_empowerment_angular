import { Component, OnInit } from '@angular/core';
import{UserRegister} from '../user-register' ;
import{RegisteruserService} from '../registeruser.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  user : UserRegister = new UserRegister() ;
  confirmPass: string;
  confirmPassCheckMessage: string;
  


  constructor(private userRegisterService : RegisteruserService , private router:Router ) { }

  ngOnInit(): void {
  }

  registerUser() {
  
    //console.log(this.user.userDOB) ;

    if (this.user.userPassword != this.confirmPass) {
      this.confirmPassCheckMessage = "Password does not match with Confirm Password" ;
    }

    else{
    this.userRegisterService.userregister(this.user).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['userloginLink'])
      }
      
    })
  }

  }


}
