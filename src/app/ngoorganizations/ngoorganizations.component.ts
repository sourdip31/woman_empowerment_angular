import { Component, OnInit } from '@angular/core';
import {ViewallngoService} from '../viewallngo.service';
import{ViewNGO} from '../ngo';

@Component({
  selector: 'app-ngoorganizations',
  templateUrl: './ngoorganizations.component.html',
  styleUrls: ['./ngoorganizations.component.css']
})
export class NgoorganizationsComponent implements OnInit {
  ngo : Array<ViewNGO>=[] ;
  constructor(private viewAllngoService:ViewallngoService) { }
  

  ngOnInit(): void {
    this.viewAllngoService.viewNGO().subscribe(data=>{
      this.ngo=data;
    })
  }


}
