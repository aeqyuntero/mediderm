import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { DataService } from '../dataservices/data.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  usuario: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    fecha: '',
    telefono: '',
    contrasena: '',
    sexo: '',
    nomUsuario: '',
    direccion: '',
  };

  loading = true;

  cocontrasena = '';

  constructor(
    private data: DataService,
    private db: ConexionBDService,
    private router: Router
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 200);
  }

  registrar(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });

      Swal.fire({
        title: 'Error!',
        text: 'El registro no es válido',
        icon: 'error',
        confirmButtonText: 'Ok',
      });

      return;
    }

    /*this.data.registrarUsuario(usuario).subscribe(resp => {
      id = resp;
      this.login(id);
    });*/

    this.usuario = {
      nombre: form.value.nombre,
      apellido: form.value.apellido,
      correo: form.value.correo,
      fecha: form.value.fecha,
      telefono: form.value.telefono,
      contrasena: form.value.contrasena,
      sexo: form.value.sexo,
      nomUsuario: form.value.usuario,
      direccion: form.value.direccion,
    };

    this.login(String(this.db.set('Usuarios', this.usuario).key));

    Swal.fire({
      title: 'Bien',
      text: 'Usuario registrado con exito',
      icon: 'success',
      confirmButtonText: 'Ok',
    });
  }

  login(id: string) {
    this.db
      .getByKey('Usuarios', id)
      .valueChanges()
      .subscribe((resp: any) => {
        localStorage.setItem('token', id);
        localStorage.setItem('usuario', resp.nomUsuario);
      });
    console.log('Entro');
    this.router.navigate(['inicio']);
  }
}

export interface Usuario {
  nombre: string;
  apellido: string;
  correo: string;
  fecha: string;
  telefono: string;
  contrasena: string;
  sexo: string;
  nomUsuario: string;
  direccion: string;
}
