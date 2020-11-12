import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {ViewHomes} from '../../../viewhomes';

@Component({
  selector: 'app-viewhomes',
  templateUrl: './viewhomes.component.html',
  styleUrls: ['./viewhomes.component.css']
})
export class ViewhomesComponent implements OnInit {
  viewhome: Array<ViewHomes>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.  viewHomes().subscribe(data=>{
      this.viewhome = data;
    })
  }

}




