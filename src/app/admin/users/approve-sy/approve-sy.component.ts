import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-approve-sy',
  templateUrl: './approve-sy.component.html',
  styleUrls: ['./approve-sy.component.css']
})
export class ApproveSYComponent implements OnInit {
message:string;
  constructor(private adminService: AdminService,private router:Router) { }
  
  ngOnInit(): void {
    this.adminService.approveSY().subscribe(data=>{
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS'){
        this.message=data.message;
      }
  })
  }

}