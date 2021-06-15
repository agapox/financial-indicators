export interface IndicatorInterface {
  codigo: string;
  fecha: string;
  nombre: string;
  unidad_medida: 'Porcentaje' | 'Dólar' | 'Peso' | '';
  valor: number;
}
