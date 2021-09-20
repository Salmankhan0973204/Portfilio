import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboradComponent } from './dashborad.component';

const routes: Routes = [{ path: '', component: DashboradComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboradRoutingModule { }
