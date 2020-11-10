import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../admin.service';
import {Course} from '../../../course';

@Component({
  selector: 'app-coursesview',
  templateUrl: './coursesview.component.html',
  styleUrls: ['./coursesview.component.css']
})
export class CoursesviewComponent implements OnInit {
course: Array<Course>=[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService. viewCourses().subscribe(data=>{
      this.course = data;
    })
  }

}
