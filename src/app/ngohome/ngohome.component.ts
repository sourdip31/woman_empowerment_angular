import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngohome',
  templateUrl: './ngohome.component.html',
  styleUrls: ['./ngohome.component.css']
})
export class NgohomeComponent implements OnInit {

  constructor(private router:Router) { }


  public login():void{
    this.router.navigateByUrl('/ngologinLink');
  }  

 
 
  


  ngOnInit(): void {
  }

}
