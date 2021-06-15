import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from './shared/services/indicators.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'financial-indicators';

  rawIndicators = {};
  indicators: any[] = [];
  dateCall: any;

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
      console.log(this.dateCall);
      console.log(this.indicators);
    });
  }
}
