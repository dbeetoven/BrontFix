export interface customer {
  $key?: string;
  nombre?: string;
  apellido?: string;
  direccion?: {
        calle?: string; // required
        codigoPostal?: string;
        numero?: number;
    }
  fechaNacimiento?: Date;
  correos?: string[];
  profesiones?: string[];
  Telefono?: {
      casa?: {numero?: number; }
       mobil?: {numero?: number; }
        oficina?: {numero?: number; }
  }
  tipo?: string;
  descripcion?: string;
  rating?: string;
  vigente?: boolean;
  fechaServivios?: any[];
  fechaDeAlta?: Date;
  fechaDeBaja?: Date;
  Servicios?: any[];
}
