import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { IndicatorsService } from 'src/app/shared/services/indicators.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  rawIndicators = {};
  indicators: any[] = [];
  dateCall: any;
  isLoading = true;

  constructor(
    private indicartorsService: IndicatorsService
  ) {}

  ngOnInit() {
    this.getIndicatorsFromService();
  }

  getIndicatorsFromService() {
    this.indicartorsService.getIndicatorsData().subscribe(data => {
      this.rawIndicators = data;
      console.log(this.rawIndicators)
      let theDate = '';
      Object.entries(this.rawIndicators).forEach((el: [string, any]) => {
        theDate = el[0] === 'fecha' ? el[1] : theDate;
        if (el[0] !== 'version' && el[0] !== 'fecha' && el[0] !== 'autor') {
          this.indicators.push(el[1])
        }
      })
      this.dateCall = new Date(theDate);
      this.saveDataSessionStorage(data);
      console.log(this.dateCall);
      console.log(this.indicators);
      const timerLoading = timer(600);
      timerLoading.subscribe(() => this.isLoading = false);
    });
  }

  saveDataSessionStorage(rawData: any) {
    if (typeof(Storage) !== 'undefined') {
      console.log(rawData)
      sessionStorage.setItem('indicators', JSON.stringify(rawData));
    }
  }

}
