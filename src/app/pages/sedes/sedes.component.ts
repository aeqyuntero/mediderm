import { Component, OnInit } from '@angular/core';

import { DataService } from '../dataservices/data.service';
import { sedesmodel } from '../sedes/models/sedesmodel';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.css']
})
export class SedesComponent implements OnInit {

  constructor(private _data: DataService) { }

  sedes: sedesmodel[] = [];
  ngOnInit(): void {
    this._data.getSedeslista().subscribe(data => {
      this.sedes = data ;
      console.log('A');
      console.log(data);
      console.log('FF');
    });

}
}
