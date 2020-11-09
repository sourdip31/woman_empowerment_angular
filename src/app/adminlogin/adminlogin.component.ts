import { Component, OnInit } from '@angular/core';
//import{FormControl,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminLogin } from '../adminlogin'
import { AdminloginfailComponent } from '../adminloginfail/adminloginfail.component';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

 adminlogin=new AdminLogin("Muthu@lti.com","muthu");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  
  checkLogin(){
     if(this.adminlogin.email=="Muthu@lti.com" && this.adminlogin.password=="muthu"){
 //redirect to success html
 this.router.navigate(['/adminhomeLink']);
    }
     else{
 // redirect to error html
this.router.navigate(['/failLink']);
     }

}
}

