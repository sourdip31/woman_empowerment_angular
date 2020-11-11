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
  


  constructor(private userRegisterService : RegisteruserService , private router:Router ) { }

  ngOnInit(): void {
  }

  registerUser() {
    //alert(JSON.stringify(this.customer));
    console.log(this.user.userDOB) ;

    this.userRegisterService.userregister(this.user).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['userloginLink'])
      }
      else {
        //missing code right now
      }
    })
  }


}
