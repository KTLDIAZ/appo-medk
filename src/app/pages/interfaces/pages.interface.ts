export interface Emergency {
  codigo?: string;
  fecha: string;
  observacion: string;
}

export interface HealthCenter {
  _id?: string;
  nombre: string;
  ubicacion: string;
  empieza: number;
  finaliza: number;
}

export interface Office {
  idCentroSalud: string;
  idDoctor: string;
  indicaciones: string;
  numeroConsultorio: number;
  horarios?: any[];
}

export interface Offices {
  _id: string;
  idCentroSalud: IDCentroSalud;
  horarios: any[];
  indicaciones: string;
  numeroConsultorio: number;
  idDoctor: IDDoctor;
}

export interface IDCentroSalud {
  _id: string;
  ubicacion: string;
  empieza: number;
  finaliza: number;
  nombre: string;
}

export interface IDDoctor {
  _id: string;
  fechaCreacion: Date;
  password: string;
  name: string;
  email: string;
  rol: string;
}

export interface Schedule {
  empieza?: number;
  finaliza?: number;
}
