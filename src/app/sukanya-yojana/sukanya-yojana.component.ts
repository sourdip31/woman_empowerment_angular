import { Component, OnInit } from '@angular/core';
import { SukanyaYojana } from '../sukanyayojana';
import { ApplySukanyaYojanaService } from '../apply-sukanya-yojana.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sukanya-yojana',
  templateUrl: './sukanya-yojana.component.html',
  styleUrls: ['./sukanya-yojana.component.css']
})
export class SukanyaYojanaComponent implements OnInit {
  sukanya : SukanyaYojana = new SukanyaYojana() ;
  message : string ;
  constructor(private sukanyaService : ApplySukanyaYojanaService , private router:Router) { }

  ngOnInit(): void {
  }

  applySukanya() {
    this.sukanya.userId=Number(sessionStorage.getItem('userId'));
    //alert(JSON.stringify(this.sukanya));
    this.sukanyaService.usersukanya(this.sukanya).subscribe(data => {
     // alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['welfareSchemesLink'])
      }
      else {
        this.message = data.message ;

        

      }
    })
  }
}
