import { NgModule } from '@angular/core';
import { CommonModule,  } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashboradComponent } from './dashborad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboradComponent],
  imports: [
    CommonModule,
    DashboradRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DashboradModule { }
