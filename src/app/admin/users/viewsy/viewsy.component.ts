import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {ViewSY} from './sukanyayojna';

@Component({
  selector: 'app-viewsy',
  templateUrl: './viewsy.component.html',
  styleUrls: ['./viewsy.component.css']
})
export class ViewsyComponent implements OnInit {
  sukanyayojna: Array<ViewSY>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.viewSY().subscribe(data=>{
      this.sukanyayojna = data;
    })
  }

}
