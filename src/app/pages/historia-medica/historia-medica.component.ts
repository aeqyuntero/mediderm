import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { DataService } from '../dataservices/data.service';

@Component({
  selector: 'app-historia-medica',
  templateUrl: './historia-medica.component.html',
  styleUrls: ['./historia-medica.component.css'],
})
export class HistoriaMedicaComponent implements OnInit {

  datosU: any;
  esMasculino = false;
  loading = true;
  historia: any[] = [];
  div_his = false;
  div_info = false;

  constructor(private db: ConexionBDService, private data: DataService) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  funcionDivInfo(): void {
    this.div_his = true;
    this.div_info = false;
  }

  funcionDivHistoria(): void {
    this.div_his = false;
    this.div_info = true;
  }

  async obtenerUsuario() {
    console.log("obteniendo usuario");
    const id = localStorage.getItem('token');
    if (id) {
      this.db.getByKey("/Usuarios", id).valueChanges().subscribe((resp: any) => {
        this.datosU = resp[0];

        if (this.datosU.sexo == 'M') {
          this.esMasculino = true;
        } else {
          this.esMasculino = false;
        }
        this.db.getByQuery("/Historia_c", "Usuario", resp[0].nomUsuario).valueChanges().subscribe((data:any) => {
          this.historia = data ;
        });
        this.loading = false;
        this.div_info = true;
      });
    }
  }
}
