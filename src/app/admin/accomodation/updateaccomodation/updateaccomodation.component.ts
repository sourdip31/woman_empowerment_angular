import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UpdateAccomodation} from '../../../updateaccomodation';
import {AdminService} from '../../../admin.service';
@Component({
  selector: 'app-updateaccomodation',
  templateUrl: './updateaccomodation.component.html',
  styleUrls: ['./updateaccomodation.component.css']
})
export class UpdateaccomodationComponent implements OnInit {
  updateaccomodation: UpdateAccomodation=new UpdateAccomodation();
  message:string;
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  update(){
    alert(JSON.stringify(this.updateaccomodation));
    this.adminService.updateAccomodation(this.updateaccomodation).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.message=data.message;
      }
      else {
        //missing code right now
      }
    })
}

}
