import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConexionBDService {

  constructor(private db: AngularFireDatabase) {}

  public getList(query:string){
    console.log("entro");
    return this.db.list(query).valueChanges();
  }
}
