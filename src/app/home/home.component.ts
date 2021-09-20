import { DatashareService } from './../datashare.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data:DatashareService) { }
  datashare:any
  ngOnInit(): void {
    this.datashare=this.data.get();
    console.log(this.datashare);

  }


}
