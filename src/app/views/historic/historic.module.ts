import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoricRoutingModule } from './historic-routing.module';
import { HistoricComponent } from './historic.component';
import { SpinnerModule } from 'src/app/components/spinner/spinner.module';
import { IndicatorItemModule } from 'src/app/components/indicator-item/indicator-item.module';


@NgModule({
  declarations: [
    HistoricComponent
  ],
  imports: [
    CommonModule,
    HistoricRoutingModule,
    SpinnerModule,
    IndicatorItemModule
  ]
})
export class HistoricModule { }
