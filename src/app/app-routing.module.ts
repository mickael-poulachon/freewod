import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'wod/:id',
    loadChildren: () => import('./pages/wod/wod.module').then(m => m.WodModule),
  },
  {
    path: 'execute-wod/:id',
    loadChildren: () => import('./pages/execute-wod/execute-wod.module').then(m => m.ExecuteWodModule),
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
