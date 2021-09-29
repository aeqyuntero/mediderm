import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { medicosmodel } from '../medicos/Models/medicosmodel';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  constructor(private _data: DataService) { }

  medicos: medicosmodel[] = [];
  ngOnInit(): void {
    this._data.getMedicoslista().subscribe(data => {
      this.medicos = data ;
      console.log('A');
      console.log(data);
      console.log('FF');
    });

}
}
