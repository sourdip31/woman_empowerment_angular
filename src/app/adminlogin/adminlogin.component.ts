import { Component, OnInit } from '@angular/core';
//import{FormControl,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from '../Users'


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  users=new Users("Muthu@lti.com","muthu");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  checkLogin(){
     if(this.users.email=="Muthu@lti.com" && this.users.psw=="muthu"){
 //redirect to success html
 this.router.navigate(['/adminhomeLink']);
    }
     else{
 // redirect to error html
this.router.navigate(['/failLink']);
     }

}
}

