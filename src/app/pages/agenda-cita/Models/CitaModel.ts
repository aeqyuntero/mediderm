import { Time } from "@angular/common";

export class CitaModel {
    constructor(
          public Usuario: string,
          public Medico: string,
          public Fecha: Date,
          public Hora: Time
      ) { }
  }