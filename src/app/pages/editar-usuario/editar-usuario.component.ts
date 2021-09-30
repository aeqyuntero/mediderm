import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../dataservices/data.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private data: DataService,
              private router: Router) { }

    nombre = '';
    apellido = '';
    correo = '';
    fecha = '';
    telefono = '';
    contrasena = '';
    sexo = '';
    nomUsuario = '';
    direccion = '';

    esMasculino = false;
    loading = true;

  ngOnInit(): void {

    this.obtenerUsuario();

  }

  obtenerUsuario(){

    const id = localStorage.getItem('token');
    console.log(id);

    if(id){

      this.data.obtenerUsuario(id).subscribe((resp: any) => {
        
        this.nombre = resp.nombre;
        this.apellido = resp.apellido;
        this.correo = resp.correo;
        this.fecha = resp.fecha;
        this.telefono = resp.telefono;
        this.contrasena = resp.contrasena;
        this.sexo = resp.sexo;
        this.nomUsuario = resp.nomUsuario;
        this.direccion = resp.direccion;

        console.log(this.nombre);

        if(this.sexo == 'M'){
          
          this.esMasculino = true;
        
        }else{
          
          this.esMasculino = false;

        }

        this.loading = false;

      });

    }

  }

  guardarCambios(correo: any, telefono: any, contrasena: any, direccion: any){

    let usuario = {
      nombre : this.nombre,
      apellido : this.apellido,
      fecha : this.fecha,
      sexo : this.sexo,
      nomUsuario : this.nomUsuario,
      correo,
      telefono,
      contrasena,
      direccion
    }

    this.correo = correo;
    this.telefono = telefono;
    this.contrasena = contrasena;
    this.direccion = direccion;

    this.data.cambiarUsuario(usuario, localStorage.getItem('token')).subscribe(resp => {

      this.router.navigate(['inicio']);

    });

  }

}
