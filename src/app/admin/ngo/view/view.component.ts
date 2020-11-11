import { Component, OnInit } from '@angular/core';
import {ViewNGO} from '../../../ngo';
import {AdminService} from '../../../admin.service'; 


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
ngo: Array<ViewNGO>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.viewNGO().subscribe(data=>{
      this.ngo = data;
    })
  
}
}

  



