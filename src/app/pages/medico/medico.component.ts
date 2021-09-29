import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { medicosmodel } from '../medicos/Models/medicosmodel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  id:any = null;
  medico: medicosmodel = new medicosmodel();

  constructor(private _data: DataService, private _activatedRoute: ActivatedRoute) {   }

  
  ngOnInit(): void {
    /*this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== 'nuevo'){
      //this._data.getMedicolista(this.id).subscribe((datas: medicosmodel) => {
        this.medico = data;
        this.medico.Id_med = this.id;
      });*/
    }
    // tslint:disable-next-line: triple-equals
    /*if (this.id == 'nuevo'){
      this.medico.Id_med = null;

    }

  }*/
}
