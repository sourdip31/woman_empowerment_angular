import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import {EnrollmentStatus} from '../../../enrollmentstatus';

@Component({
  selector: 'app-approveenrollments',
  templateUrl: './approveenrollments.component.html',
  styleUrls: ['./approveenrollments.component.css']
})
export class ApproveenrollmentsComponent implements OnInit {
message:string;
  constructor(private adminService: AdminService,private router:Router) { }

  ngOnInit(): void {
    this.adminService.approveEnrollments().subscribe(data=>{
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS'){
        this.message=data.message;
      }
  })
  }


}
