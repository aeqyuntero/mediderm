import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})

export class ConexionBDService {

  constructor(private db: AngularFireDatabase) {}

  public getObject(dir:string){
    return this.db.object(dir);
  }

  public getList(dir:string){
    return this.db.list(dir);
  }

  public getByQuery(dir:string, orden:string, query:any){
    return this.db.list(dir, ref => ref.orderByChild(orden).equalTo(query));
  }

  public getByKey(dir:string, query:any){
    return this.db.list(dir, ref => ref.orderByKey().equalTo(query));
  }

  public set(dir:string, data:any){
    return this.db.list(dir).push(data);
  }

  public remove(dir:string, id:string){
    return this.db.list(dir).remove(id);
  }

  public update(dir:string, data:any){
    const $key = data.$key;
    delete data.$key;
    return this.db.list(dir).update($key, data);
  }
}
