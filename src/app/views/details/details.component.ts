import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { timer } from 'rxjs';
import { IndicatorHistoricInterface, IndicatorHistoricItemInterface } from 'src/app/shared/interfaces/indicator-historic.interface';
import { IndicatorsService } from 'src/app/shared/services/indicators.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  indicator: {
    codigo: string,
    fecha: string,
    nombre: string,
    unidad_medida: string,
    valor: number;
  } = {
    codigo: "",
    fecha: "",
    nombre: "",
    unidad_medida: "",
    valor: 0
  };
  indicatorType = '';
  isLoading = true;

  constructor(
    private router: Router,
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

    if (typeof(Storage) !== 'undefined') {
      let indicatorsRawData = sessionStorage.getItem('indicators');
      if (indicatorsRawData !== null) {
        indicatorsRawData = JSON.parse(indicatorsRawData)
        this.indicator = Object.entries(indicatorsRawData !== null && indicatorsRawData).filter((el: any) => {
          if (el[0] === this.indicatorType) {
            return el;
          }
        })[0][1];
        console.log(this.indicator)
        const timerLoad = timer(600);
        timerLoad.subscribe(() => this.isLoading = false);
      }
    } else {
      this.getIndicatorDataFromService(type);
    }

  }

  getIndicatorDataFromService(type: string) {
    this.indicatorsService.getIndicatorByType(type).subscribe(data => {
      console.log(data);
      const timerLoad = timer(600);
      timerLoad.subscribe(() => this.isLoading = false);
    })
  }

  goTo() {
    this.router.navigate([''])
  }



}
