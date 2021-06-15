import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricComponent } from './historic.component';

const routes: Routes = [
  { path: ':indicator', component: HistoricComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricRoutingModule { }
