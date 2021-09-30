import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
import { DataService } from '../dataservices/data.service';
import { medicosmodel } from '../medicos/Models/medicosmodel';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private db: ConexionBDService) { }

  medicos: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Medicos").valueChanges().subscribe((data:any) => {
      this.medicos = data ;
    });
}
}
