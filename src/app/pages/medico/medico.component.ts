import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { medicosmodel } from '../medicos/Models/medicosmodel';
import { ActivatedRoute } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  id:any = null;
  medico: any = [];

  constructor(private db: ConexionBDService, private _activatedRoute: ActivatedRoute) {   }

  
  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== 'nuevo'){
      this.db.getList("Medicos").subscribe(data => {
        this.medico = data;
        this.medico.Id_med = this.id;
        console.log('B');
        console.log(data);
        console.log('FF');
      });
    }
    // tslint:disable-next-line: triple-equals
    /*if (this.id == 'nuevo'){
      this.medico.Id_med = null;

    }

  }*/
}
}
