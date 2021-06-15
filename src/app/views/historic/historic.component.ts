import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { timer } from 'rxjs';
import { IndicatorHistoricInterface, IndicatorHistoricItemInterface } from 'src/app/shared/interfaces/indicator-historic.interface';
import { IndicatorInterface } from 'src/app/shared/interfaces/indicator.interface';
import { IndicatorsService } from 'src/app/shared/services/indicators.service';

@Component({
  selector: 'app-historic',
  templateUrl: './historic.component.html',
  styleUrls: ['./historic.component.scss']
})
export class HistoricComponent implements OnInit {

  indicatorType = '';
  isLoading = true;
  indicator: IndicatorHistoricInterface = {
    version: '',
    autor: '',
    codigo: '',
    nombre: '',
    unidad_medida: '',
    serie: [{
      fecha: '',
      valor: 0
    }]
  };
  series: IndicatorInterface[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private indicatorsService: IndicatorsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.indicatorType = params.indicator
      console.log(this.indicatorType)
      this.getIndicatorData(this.indicatorType);
    })
  }

  getIndicatorData(type: string) {
    this.indicatorsService.getIndicatorByType(type).subscribe((data: any) => {
      console.log(data);
      this.indicator = data;
      this.formatSeries(data)
      const timeLoading = timer(600);
      timeLoading.subscribe(() => this.isLoading = false);
    })
  }

  formatSeries(rawData: IndicatorHistoricInterface) {

    rawData.serie.forEach(el => {
      this.series?.push({
        codigo: this.indicator?.codigo,
        fecha: el.fecha,
        nombre: this.indicator?.nombre,
        unidad_medida: this.indicator?.unidad_medida,
        valor: el.valor
      });
    });
  }

}
