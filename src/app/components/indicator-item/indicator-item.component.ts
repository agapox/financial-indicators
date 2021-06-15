import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndicatorInterface } from 'src/app/shared/interfaces/indicator.interface';

@Component({
  selector: 'app-indicator-item',
  templateUrl: './indicator-item.component.html',
  styleUrls: ['./indicator-item.component.scss']
})
export class IndicatorItemComponent implements OnInit {

  @Input() indicator: IndicatorInterface | undefined;
  @Input() type: 'historic' | '' = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goTo(url: string) {
    this.router.navigate([url, this.indicator?.codigo.toLowerCase()])
  }

}
