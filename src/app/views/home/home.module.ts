import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IndicatorItemModule } from 'src/app/components/indicator-item/indicator-item.module';
import { HomeRoutingModule } from './home-routing.module';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IndicatorItemModule,
    SpinnerModule
  ]
})
export class HomeModule { }
