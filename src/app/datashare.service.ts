import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor(private router:Router) { }

    data={
      sitetitle:"PORTFOLIO",
      name:" SALMAN KHAN",
      profile: "MEAN stack developer",
      email: "itssaloobhai@gmail.com",
      phone: "+923360973204",
      skills:[{name:"HTML", percentage:'90%'}
      ,{name:"CSS" , percentage:'80%'},
       {name:"Angular",percentage:'80%' },
       {name:"Express",percentage:'75%' },
       {name:"Nodejs",percentage:'70%' },
       {name:"MongoDB",percentage:'80%' }],
      address:"i10/islambad",
      aboutme:"I am a MEAN stack developer i have 1 year experience in web development"
    }
    get(){
      return this.data;
    }

    updateSkills(val:any){
      this.data.skills= val;
      this.router.navigate(["/"])

    }
    update(value:any){
      this.data=value;
      this.router.navigate(["/"])

    }
}
