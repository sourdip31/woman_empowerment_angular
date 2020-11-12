import { Component, OnInit } from '@angular/core';
import { NgoRegister } from '../ngo-register';
import { RegisterngoService } from '../registerngo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ngo-register',
  templateUrl: './ngo-register.component.html',
  styleUrls: ['./ngo-register.component.css']
})
export class NgoRegisterComponent implements OnInit {

  ngo: NgoRegister = new NgoRegister();
  confirmPass: string;
  confirmPassCheckMessage: string;
  constructor(private ngoRegisterService: RegisterngoService, private router: Router) { }

  ngOnInit(): void {
  }

  registerNgo() {
    if (this.ngo.ngoPassword != this.confirmPass) {
      this.confirmPassCheckMessage = "Password does not match with Confirm Password" ;
    }

    else {
      this.ngoRegisterService.ngoregister(this.ngo).subscribe(data => {
        //alert(JSON.stringify(data));
        if (data.status == 'SUCCESS') {
          this.router.navigate(['ngologinLink'])
        }

      })

    }
  }

}
