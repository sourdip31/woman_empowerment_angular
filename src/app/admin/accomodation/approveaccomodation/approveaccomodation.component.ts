import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-approveaccomodation',
  templateUrl: './approveaccomodation.component.html',
  styleUrls: ['./approveaccomodation.component.css']
})
export class ApproveaccomodationComponent implements OnInit {
  message:string;
  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.approveAccomodation().subscribe(data=>{
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS'){
        this.message=data.message;
      }
  })
  }

}
