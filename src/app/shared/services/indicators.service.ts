import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { indicatorsMocks } from 'src/assets/data-mocks/indicators.mocks';
import { indicatorsHistoricMocks } from 'src/assets/data-mocks/indicators-history.mocks';
import { IndicatorHistoricInterface } from '../interfaces/indicator-historic.interface';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  production = false;

  url = 'https://mindicador.cl/api';

  constructor(
    private http: HttpClient
  ) { }

  getIndicatorsData() {
    if (this.production) {
      return this.http.get(this.url);
    } else {
      return of(indicatorsMocks)
    }

  }

  getIndicatorByType(type: string) {
    if (this.production) {
      return this.http.get<IndicatorHistoricInterface>(`${this.url}/${type}`);
    } else {
      return of(indicatorsHistoricMocks)
    }
  }
}
