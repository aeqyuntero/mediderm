import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionBDService {

  constructor(private firestore: AngularFirestore) {}

  public async get() {
    try {
      const re = this.firestore.collection('prueba', ref => ref.where('nombre', '==', 'yo'));
      const resul = await re.get();
      resul.forEach((doc)=>{
        doc.forEach((a)=>{
          console.log(a.id, '=>', a.data());
        })
      })
    } catch (error) {
      console.log(error);
    }
    
  }
}
