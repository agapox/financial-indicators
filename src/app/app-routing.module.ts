import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'details', loadChildren: () => import('./views/details/details.module').then(m => m.DetailsModule) },
  { path: 'historic', loadChildren: () => import('./views/historic/historic.module').then(m => m.HistoricModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
