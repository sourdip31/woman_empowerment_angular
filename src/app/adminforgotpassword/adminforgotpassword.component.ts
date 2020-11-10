import { Component, OnInit } from '@angular/core';
import {ForgotPassword} from '../forgotpassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminforgotpassword',
  templateUrl: './adminforgotpassword.component.html',
  styleUrls: ['./adminforgotpassword.component.css']
})
export class AdminforgotpasswordComponent implements OnInit {
forgotpassword = new ForgotPassword();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  checkEmail(){
   
     this.router.navigate(['/changepwdLink']);
    
 }
}



