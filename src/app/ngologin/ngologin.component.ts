import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngologin',
  templateUrl: './ngologin.component.html',
  styleUrls: ['./ngologin.component.css']
})
export class NgologinComponent implements OnInit {

  constructor(private router:Router) { }



  ngOnInit(): void {
  }

}
