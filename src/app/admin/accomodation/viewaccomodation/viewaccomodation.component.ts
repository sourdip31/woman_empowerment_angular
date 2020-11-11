import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {ViewAccomodation} from '../../../viewaccomodations';
@Component({
  selector: 'app-viewaccomodation',
  templateUrl: './viewaccomodation.component.html',
  styleUrls: ['./viewaccomodation.component.css']
})
export class ViewaccomodationComponent implements OnInit {
  viewaccomodation: Array<ViewAccomodation>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.  viewAccomodation().subscribe(data=>{
      this.viewaccomodation = data;
    })
  }

}
