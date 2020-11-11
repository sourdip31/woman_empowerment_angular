import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {ViewEnrollments } from '../../../enroll';

@Component({
  selector: 'app-viewenrollments',
  templateUrl: './viewenrollments.component.html',
  styleUrls: ['./viewenrollments.component.css']
})
export class ViewenrollmentsComponent implements OnInit {
  enroll: Array<ViewEnrollments>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.viewEnrollments().subscribe(data=>{
      this.enroll = data;
    })
  }

}
