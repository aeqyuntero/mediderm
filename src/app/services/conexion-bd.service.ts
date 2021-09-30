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

  public set(dir:string, doc:any){
    this.db.list(dir).push(doc);
  }

  public remove(dir:string, id:string){
    this.db.list(dir).remove(id);
  }

  public update(dir:string, data:any){
    const $key = data.$key;
    delete data.$key;
    this.db.list(dir).update($key, data);
  }
}
