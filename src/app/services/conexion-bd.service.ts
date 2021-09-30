import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

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
