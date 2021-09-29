import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private db:ConexionBDService) { }

  ngOnInit(): void {
    console.log("iniciado");
    this.db.get();
  }

}
