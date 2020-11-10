import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {Users} from '../../../users';
@Component({
  selector: 'app-usersview',
  templateUrl: './usersview.component.html',
  styleUrls: ['./usersview.component.css']
})
export class UsersviewComponent implements OnInit {
user: Array<Users>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService. viewUsers().subscribe(data=>{
      this.user = data;
    })
  }

}
