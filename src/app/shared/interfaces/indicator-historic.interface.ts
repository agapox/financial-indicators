export interface IndicatorHistoricInterface {
  version: string;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: 'Porcentaje' | 'Dólar' | 'Peso' | '',
  serie: IndicatorHistoricItemInterface[];
}

export interface IndicatorHistoricItemInterface {
  fecha: string;
  valor: number;
}
