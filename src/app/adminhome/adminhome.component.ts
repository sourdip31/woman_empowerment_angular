import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  viewNGO(){
    this.router.navigate(['/admin/ngo/approve']);
   
  }
}
