import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private db: ConexionBDService) { }

  servicios: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Servicios").valueChanges().subscribe((data:any) => {
      this.servicios = data ;
    });
  }

}
