import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  constructor(private db: ConexionBDService) { }

  sedes: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Sedes").valueChanges().subscribe((data:any) => {
      this.sedes = data ;
    });
  }
}