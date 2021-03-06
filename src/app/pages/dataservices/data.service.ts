import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sedesmodel } from '../sedes/models/sedesmodel';
import { medicosmodel } from '../medicos/Models/medicosmodel';
import {map} from 'rxjs/operators';
import { Usuario } from '../registro/registro.component';
import { CitaModel } from '../agenda-cita/Models/CitaModel';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://mediderm-34e3d-default-rtdb.firebaseio.com/';
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getSedeslista(){
    return this._http.get(`${this.url}/Sedes.json`).pipe(map(this.crearArregloSedes));
  }

  getMedicoslista(){
    return this._http.get(`${this.url}/Medicos.json`).pipe(map(this.crearArregloMedicos));
  }

  // tslint:disable-next-line: typedef
  getSedelista(id: any){
    return this._http.get(`${this.url}/Sedes/${id}.json`);
  }

  getMedicolista(id: any){
    return this._http.get(`${this.url}/Medicos/${id}.json`);
  }

  getCitaslista(id: any){
    return this._http.get(`${this.url}/Medicos/${id}.json`);
  }
  // tslint:disable-next-line: typedef
  putsede(sede: sedesmodel){
    const sedetemp = {
      ...sede
    };
    delete sedetemp.Id_sede;
    return this._http.put(`${this.url}/Sedes/${sede.Id_sede}.json`, sedetemp);
  }
  // tslint:disable-next-line: typedef
  postsede(sede: sedesmodel){
    return this._http.post(`${this.url}/Sedes.json`, sede).pipe(
      map((resp: any) => {
        sede.Id_sede = resp.name;
        return sede;
      })
    );

  }


  putmedico(medico: medicosmodel){
    const medicotemp = {
      ...medico
    };
    delete medicotemp.Id_med;
    return this._http.put(`${this.url}/Medicos/${medico.Id_med}.json`, medicotemp);
  }
  // tslint:disable-next-line: typedef
  postmedico(medico: medicosmodel){
    return this._http.post(`${this.url}/Medicos.json`, medico).pipe(
      map((resp: any) => {
        medico.Id_med = resp.name;
        return medico;
      })
    );

  }

  // tslint:disable-next-line: typedef
  private crearArregloSedes(sede  : any){
    console.log(sede);
    const sedes: sedesmodel[] = [];
    if (sede == null){
      return [];
    }
    Object.keys(sede).forEach(key => {
      const sedes2:   sedesmodel = sede[key];
      sedes2.Id_sede = key;
      sedes.push(sedes2);
    });
    return sedes ;

  }

  private crearArregloMedicos(medico  : any){
    console.log(medico);
    const medicos: medicosmodel[] = [];
    if (medico == null){
      return [];
    }
    Object.keys(medico).forEach(key => {
      const medicos2:   medicosmodel = medico[key];
      medicos2.Id_med = key;
      medicos.push(medicos2);
    });
    return medicos ;

  }

  registrarUsuario(usuario: Usuario){
    
    return this._http.post(`${this.url}Usuarios.json`, usuario).pipe(
      map((resp: any) => {
        return resp.name;
      })
    );

  }

  obtenerUsuario(id: string){

    return this._http.get(`${this.url}Usuarios/${id}.json`);

  }

  encontrarUsuarios(/* usuario: string */){

    return this._http.get(`${this.url}Usuarios.json`);

  }

  cambiarUsuario(usuario: any, id: any){
    return this._http.put(`${this.url}Usuarios/${id}.json`, usuario);
  }

  encontrarCitas(/* usuario: string */){
    return this._http.get(`${this.url}Citas.json`);
  }

  registrarCita(cita: CitaModel){
    
    return this._http.post(`${this.url}Citas.json`, cita).pipe(
      map((resp: any) => {
        return resp.name;
      })
    );

  }

}
