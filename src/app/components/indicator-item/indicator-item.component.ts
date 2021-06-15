import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-item',
  templateUrl: './indicator-item.component.html',
  styleUrls: ['./indicator-item.component.scss']
})
export class IndicatorItemComponent implements OnInit {

  @Input() indicator: {
    codigo: string,
    fecha: string,
    nombre: string,
    unidad_medida: 'Porcentaje' | 'Dólar' | 'Peso',
    valor: number
  } | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
