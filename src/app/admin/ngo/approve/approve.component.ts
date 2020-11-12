import { Component, OnInit } from '@angular/core';
import { NgoApproval } from 'src/app/ngoapproval';
import { NgoStatus } from 'src/app/ngostatus';
import {AdminService} from '../../../admin.service';
import {ViewNGO} from '../../../ngo';
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {
  NGO:NgoApproval = new NgoApproval();
  ngo: Array<ViewNGO>=[];
  isApproved:boolean=false;
  message:string;
  status:string
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    
    this.adminService.viewNGO().subscribe(data=>{
      this.ngo = data;
    })
  }

  approveNGO(){
    this.isApproved=true;
    this.adminService.approveNGO(this.NGO).subscribe(data=>{
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS'){
        this.message=data.message;
      }
  })
  }
  
    
  

}
