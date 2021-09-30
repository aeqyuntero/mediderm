import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { DataService } from '../dataservices/data.service';

@Component({
  selector: 'app-historia-medica',
  templateUrl: './historia-medica.component.html',
  styleUrls: ['./historia-medica.component.css'],
})
export class HistoriaMedicaComponent implements OnInit {

  constructor(private db: ConexionBDService, private data: DataService) { }
  

  historia: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Historia_c").valueChanges().subscribe((data:any) => {
      this.historia = data ;
    });
}


  funcionDivInfo(): void {
    let div = document.getElementById('info');
    let div2 = document.getElementById('historia');
    if (div != null && div2 != null) {
      div.style.display = 'none';
      div2.style.display = 'block';
    }
  }

  funcionDivHistoria(): void {
    let div = document.getElementById('info');
    let div2 = document.getElementById('historia');
    if (div != null && div2 != null) {
      div.style.display = 'block';
      div2.style.display = 'none';
    }
  }

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

  obtenerUsuario() {
    const id = localStorage.getItem('token');
    console.log(id);

    if (id) {
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

        if (this.sexo == 'M') {
          this.esMasculino = true;
        } else {
          this.esMasculino = false;
        }

        this.loading = false;
      });
    }
  }
}
