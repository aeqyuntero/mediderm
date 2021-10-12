import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { Router } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = {
    nomusuario: '',
    contrasena: '',
  };

  loading = true;

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

  login(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });

      return;
    }

    this.db
      .getObject('Usuarios')
      .valueChanges()
      .subscribe((resp: any) => {
        console.log(resp);
        let token;

        Object.keys(resp).forEach((key) => {
          if (
            resp[key].nomUsuario == form.value.usuario &&
            resp[key].contrasena == form.value.contrasena
          ) {
            token = key;
          }
        });

        if (token) {
          localStorage.setItem('token', token);
          localStorage.setItem('usuario', form.value.usuario);
          this.router.navigate(['inicio']);
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'El usuario y/o contraseña no son válidos',
            icon: 'error',
            confirmButtonText: 'Ok',
          }).then(() => {
            this.router.navigate(['login']);
          });
        }
      });
  }
}
