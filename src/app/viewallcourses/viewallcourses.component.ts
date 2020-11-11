import { Component, OnInit } from '@angular/core';
import {CoursebyngoService} from '../coursebyngo.service';
import{Course} from '../course';
import { NgoId } from '../ngoid';

@Component({
  selector: 'app-viewallcourses',
  templateUrl: './viewallcourses.component.html',
  styleUrls: ['./viewallcourses.component.css']
})
export class ViewallcoursesComponent implements OnInit {

  course : Array<Course>=[] ;
  ngoid:NgoId=new NgoId();
  constructor(private coursebyngoService:CoursebyngoService) { }
  

  ngOnInit(): void {
    //sessionStorage.setItem('ngoId',String(NgoId));
     // sessionStorage.getItem('ngoId');
    this.ngoid.ngoId=Number(sessionStorage.getItem('ngoIdOrg'));
    this.coursebyngoService.course(this.ngoid).subscribe(data=>{
      
      this.course=data;
    })
  }


}