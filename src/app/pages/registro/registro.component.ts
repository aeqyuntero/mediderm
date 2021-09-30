import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { DataService } from '../dataservices/data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  usuario: Usuario = {
    nombre : '',
    apellido : '',
    correo : '',
    fecha : '',
    telefono : '',
    contrasena : '',
    sexo : '',
    nomUsuario : '',
    direccion : ''

  };
  
  constructor(private db: ConexionBDService,
              private router: Router) { }

  ngOnInit(): void {
  }

  registrar(nombre: any, apellido: any, correo: any, fecha: any, telefono: any, contrasena: any, sexo: any, cocontrasena: any, nomUsuario: any, direccion: any){

    const usuario: Usuario = {
      nombre,
      apellido,
      correo,
      fecha,
      telefono,
      contrasena,
      sexo,
      nomUsuario,
      direccion
    }

    let id;

    this.db.set("Usuarios", usuario);

  }

  login(id: string){

    this.db.getByQuery('Usuarios', '$key', id).subscribe((resp: any) => {
      localStorage.setItem('token', id);
      localStorage.setItem('usuario', resp.nomUsuario);
    });

    this.router.navigate(['inicio']);

  }

}

export interface Usuario{
  
  nombre: string
  apellido: string
  correo: string
  fecha: string
  telefono: string
  contrasena: string
  sexo: string
  nomUsuario: string
  direccion: string

}
