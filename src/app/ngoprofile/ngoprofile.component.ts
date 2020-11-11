import { Component, OnInit } from '@angular/core';
import { ViewNGO } from '../ngo';
import { NgoId } from '../ngoid';
import{NgoprofileService} from '../ngoprofile.service';

@Component({
  selector: 'app-ngoprofile',
  templateUrl: './ngoprofile.component.html',
  styleUrls: ['./ngoprofile.component.css']
})
export class NgoprofileComponent implements OnInit {

  ngo : ViewNGO=new ViewNGO() ;
  ngoid:NgoId=new NgoId();
  constructor(private ngoprofileService:NgoprofileService) { }

  ngOnInit(): void {
    this.ngoid.ngoId=Number(sessionStorage.getItem('ngoIdOrg'));
    console.log(sessionStorage.getItem('ngoIdOrg'));
    this.ngoprofileService.ngoProfile(this.ngoid).subscribe(data=>{
      console.log(data.ngoId);
      this.ngo=data;
    })
  }

}
