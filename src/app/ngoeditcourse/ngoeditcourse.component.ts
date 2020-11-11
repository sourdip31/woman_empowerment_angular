import { Component, OnInit } from '@angular/core';
import {Ngoeditcourse} from '../ngoeditcourse';
import{Router} from '@angular/router';
import{NgoeditcourseService} from '../ngoeditcourse.service';

@Component({
  selector: 'app-ngoeditcourse',
  templateUrl: './ngoeditcourse.component.html',
  styleUrls: ['./ngoeditcourse.component.css']
})
export class NgoeditcourseComponent implements OnInit {


  edcourse : Ngoeditcourse = new Ngoeditcourse() ;
  constructor(private ngoeditcourseService : NgoeditcourseService, private router:Router ) { }

  ngOnInit(): void {
  }
  editcourse(){
    //alert(JSON.stringify(this.customer));
    this.ngoeditcourseService.ngoeditcourse(this.edcourse).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['addcoursesLink'])
      }
      else {
        //this.router.navigate(['addcoursesLink'])
      }
    })
  }
}
