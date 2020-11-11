import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {UpdateAccomodation} from '../../../updateaccomodation';
@Component({
  selector: 'app-viewaccomodation',
  templateUrl: './viewaccomodation.component.html',
  styleUrls: ['./viewaccomodation.component.css']
})
export class ViewaccomodationComponent implements OnInit {
  updateaccomodation: Array<UpdateAccomodation>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.  viewAccomodation().subscribe(data=>{
      this.updateaccomodation = data;
    })
  }

}
