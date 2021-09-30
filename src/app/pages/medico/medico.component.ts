import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  id:any = null;
  medicos: any[] = [];

  constructor(private db: ConexionBDService, private _activatedRoute: ActivatedRoute) {   }

  
  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    if (this.id !== 'nuevo'){
      console.log("id: "+this.id);
      this.db.getByQuery("/Medicos", "Codigo_agenda", Number(this.id)).valueChanges().subscribe(data => {
        this.medicos = data ;
      });
    }
    // tslint:disable-next-line: triple-equals
    /*if (this.id == 'nuevo'){
      this.medico.Id_med = null;

    }

  }*/
}
}
