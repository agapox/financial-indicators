import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IndicatorsService } from 'src/app/shared/services/indicators.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  indicator = '';
  isLoading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private indicatorsService: IndicatorsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.indicator = params.indicator
      console.log(this.indicator)
      this.getIndicatorData(this.indicator);
    })
  }

  getIndicatorData(type: string) {
    this.indicatorsService.getIndicatorByType(type).subscribe(data => {
      console.log(data);
    })
  }



}
