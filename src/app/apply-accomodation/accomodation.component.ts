import { Component, OnInit } from '@angular/core';
import { Accomodation } from '../accomodation';
import { AccomodationServiceService } from '../accomodation-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accomodation',
  templateUrl: './accomodation.component.html',
  styleUrls: ['./accomodation.component.css']
})
export class ApplyAccomodationComponent implements OnInit {
  accomodation : Accomodation = new Accomodation() ;
  constructor(private accomodationService : AccomodationServiceService , private router:Router) { }

  ngOnInit(): void {
  }

  applyAccomodation() {
    this.accomodation.userId=Number(sessionStorage.getItem('userId'));
    alert(JSON.stringify(this.accomodation));
    this.accomodationService.useraccomodation(this.accomodation).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['welfareSchemesLink'])
      }
      else {
        //missing code right now
      }
    })
  }
}
