import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ExecuteWodComponent} from './execute-wod.component';
import {TimerComponent} from '../../components/timer/timer.component';
import {CountdownModule} from 'ngx-countdown';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

const routesWod: Routes = [
  {
    path: '',
    component: ExecuteWodComponent,
    data: { animation: 'wod' }
  }
];

@NgModule({
  declarations: [ExecuteWodComponent, TimerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesWod),
    CountdownModule,
    MatToolbarModule,
    MatCardModule
  ]
})
export class ExecuteWodModule { }
