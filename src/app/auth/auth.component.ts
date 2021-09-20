import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
   data :any
  constructor( private Routerr: Router) { }
   login = new FormGroup({
    email: new FormControl("",[Validators.required ]),
    password: new FormControl("",[Validators.required ])
  })
  ngOnInit(): void {
  }
  click(){
    if(this.login.value.email=='admin' && this.login.value.password=='admin')
    {
      this.Routerr.navigate(['/dashborad']);
    }
  }

}

