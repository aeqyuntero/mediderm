import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class ConexionBDService {

  constructor(private db: AngularFireDatabase) {}

  public getList(dir:string){
    return this.db.list(dir).valueChanges();
  }

  public getByQuery(dir:string, orden:string, query:any){
    return this.db.list(dir, ref => ref.orderByChild(orden).equalTo(query)).valueChanges();
  }
}
