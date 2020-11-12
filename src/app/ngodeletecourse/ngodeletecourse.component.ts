import { Component, OnInit } from '@angular/core';
import { Ngodeletecourse } from '../ngodeletecourse';
import { Router } from '@angular/router';
import { NgodeletecourseService } from '../ngodeletecourse.service';
@Component({
  selector: 'app-ngodeletecourse',
  templateUrl: './ngodeletecourse.component.html',
  styleUrls: ['./ngodeletecourse.component.css']
})
export class NgodeletecourseComponent implements OnInit {
  message: string;
  delcourse: Ngodeletecourse = new Ngodeletecourse();
  constructor(private ngodeletecourseService: NgodeletecourseService, private router: Router) { }

  ngOnInit(): void {
  }
  deletecourse() {
    //alert(JSON.stringify(this.customer));
    this.ngodeletecourseService.ngodeletecourse(this.delcourse).subscribe(data => {
      //alert(JSON.stringify(data));
      if (data.status == 'SUCCESS') {
        this.router.navigate(['addcoursesLink']);
      }
      else {
        //this.router.navigate(['addcoursesLink'])
        this.message=data.message;
      }
    })
  }

}
