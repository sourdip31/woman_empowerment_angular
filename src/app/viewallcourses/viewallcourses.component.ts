import { Component, OnInit } from '@angular/core';
import {CoursebyngoService} from '../coursebyngo.service';
import{Course} from '../course';

@Component({
  selector: 'app-viewallcourses',
  templateUrl: './viewallcourses.component.html',
  styleUrls: ['./viewallcourses.component.css']
})
export class ViewallcoursesComponent implements OnInit {

  course : Array<Course>=[] ;
  constructor(private coursebyngoService:CoursebyngoService) { }
  

  ngOnInit(): void {
    this.coursebyngoService.course().subscribe(data=>{
      this.course=data;
    })
  }


}