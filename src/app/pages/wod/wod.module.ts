import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WodComponent} from './wod.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

const routesWod: Routes = [
  {
    path: '',
    component: WodComponent,
    data: { animation: 'wod' }
  }
];

@NgModule({
  declarations: [WodComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routesWod),
    MatDividerModule,
    MatListModule,
    MatToolbarModule
  ],
  exports: [
    MatDividerModule,
    MatListModule
  ]
})
export class WodModule { }
