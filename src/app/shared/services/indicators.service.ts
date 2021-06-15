import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  url = 'https://mindicador.cl/api';

  constructor(
    private http: HttpClient
  ) { }

  getIndicatorsData() {
    return this.http.get(this.url);
  }

  getIndicatorByType(type: string) {
    return this.http.get(`${this.url}/${type}`);
  }
}
