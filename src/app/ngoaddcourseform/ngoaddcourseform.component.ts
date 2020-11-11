import { Component, OnInit } from '@angular/core';
import {Ngoaddcourse} from '../ngoaddcourse';
import{Router} from '@angular/router';
import{NgoaddcourseService} from '../ngoaddcourse.service';
@Component({
  selector: 'app-ngoaddcourseform',
  templateUrl: './ngoaddcourseform.component.html',
  styleUrls: ['./ngoaddcourseform.component.css']
})
export class NgoaddcourseformComponent implements OnInit {

  course : Ngoaddcourse = new Ngoaddcourse() ;
  constructor(private ngoaddcourseService : NgoaddcourseService, private router:Router ) { }


  ngOnInit(): void {
  }
  addcourse(){
    //alert(JSON.stringify(this.customer));
    this.ngoaddcourseService.ngoaddcourse(this.course).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        this.router.navigate(['addcoursesLink'])
      }
      else {
        //missing code
      }
    })
  }
  
}
