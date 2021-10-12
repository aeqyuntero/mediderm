import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-medicos',
  templateUrl: './login-medicos.component.html',
})
export class LoginMedicosComponent implements OnInit {
  usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    pais: '',
    genero: 'masculino',
  };

  paises: Pais[] = [];

  constructor() {}

  ngOnInit(): void {}

  guardar(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });

      return;
    }

    console.log(form);
    console.log(form.value);
  }
}

interface Pais {
  nombre: string;
  codigo: string;
}
