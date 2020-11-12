import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AddAccomodation} from '../../../addaccomodation';
import {AdminService} from '../../../admin.service';
@Component({
  selector: 'app-addaccomodation',
  templateUrl: './addaccomodation.component.html',
  styleUrls: ['./addaccomodation.component.css']
})
export class AddaccomodationComponent implements OnInit {
addaccomodation: AddAccomodation=new AddAccomodation();
message:string;

  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
add(){
    //alert(JSON.stringify(this.addaccomodation));
    
    this.adminService.addAccomodation(this.addaccomodation).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
    
        this.message=data.message;
      }
      else {
        //missing code right now
       
      }
    })
}
}
