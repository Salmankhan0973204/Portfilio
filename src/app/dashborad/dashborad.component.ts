import { DatashareService } from './../datashare.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashborad',
  templateUrl: './dashborad.component.html',
  styleUrls: ['./dashborad.component.css']
})
export class DashboradComponent implements OnInit {

  constructor( private roter:Router, private data:DatashareService) { }
  datashere:any;
  
  public skills=[{name:"HTML", percentage:85}
  ,{name:"CSS" , percentage:70}]

  public newSkill={name:"", percentage:100}

  newvalue =  new FormGroup({

    sitetitle:new FormControl("",[Validators.required]),
    profile:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    phone:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    address:new FormControl("",[Validators.required]),
    aboutme:new FormControl("",[Validators.required]),
    skills:new FormControl([],[Validators.required])
  }
  )

  ngOnInit(): void {
    this.datashere=this.data.get()
    this.newvalue.patchValue(this.datashere)

  }
  AddSkill(){
    this.skills.push(this.newSkill);
    console.log(this.newSkill)
  }
  SaveSkill(){
    this.data.updateSkills(this.skills);
  }
  click(){
    this.data.update(this.newvalue.value)

  }
}
