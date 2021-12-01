export interface Emergency {
  codigo?: string;
  fecha: string;
  observacion: string;
}

export interface HealthCenter {
  nombre: string;
  ubicacion: string;
  empieza?: number;
  finaliza?: number;
}

export interface Office {
  doctor: string;
  centroSalud: string;
  indicacciones: string;
}
