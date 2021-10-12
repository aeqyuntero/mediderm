import { Component, OnInit} from '@angular/core';
import { CitaModel } from "./Models/CitaModel";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
import { DataService } from '../dataservices/data.service';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';
var FechaActual =  new Date();
var ValidadorCita = true;
var mes;
var dia;

@Component({
  selector: 'app-agenda-cita',
  templateUrl: './agenda-cita.component.html',
  styleUrls: ['./agenda-cita.component.css'],
})
export class AgendaCitaComponent implements OnInit {
  citaModel = new CitaModel("Carlos", "Juan", FechaActual, {hours:10,minutes:45} );
  constructor(private _route: ActivatedRoute, private http: HttpClient, private data: DataService, private db: ConexionBDService) {
    console.log(this._route.snapshot.paramMap.get('medico'));
   }
  citas: any[] = [];
  AllCitas: any[] = [];
  //Año
  y = FechaActual.getFullYear();
  //Mes
  m = FechaActual.getMonth() + 1;
  //Día
  d = FechaActual.getDate() ;
  ngOnInit(): void {
    if (this.m < 10){
      mes = "0" + this.m;
    }
    else{ 
      mes = this.m.toString();
    }
    if (this.d < 10){
      dia = "0" + this.d;
    }
    else{ 
      dia = this.d.toString();
    }
    let Tiempo: any=document.getElementById("E_Hora");
    Tiempo.step=300;
    let FechaHoy: any= document.getElementById("E_Fecha");
    FechaHoy.min = this.y+'-'+mes+'-'+dia; 
    this.citaModel.Medico=this._route.snapshot.paramMap.get('medico') || "undefined";
    this.citaModel.Usuario=localStorage.getItem('usuario') || "undefined";
     this.db.getByQuery("/Citas","Usuario",this.citaModel.Usuario).valueChanges().subscribe(data => {
      this.citas = data ;
      console.log(this.citas);
    });
    console.log("CitaModel: ",this.citaModel);
  }
  formularioEnviado(){
    /*
    Aquí el formulario ha sido enviado, ya sea
    por presionar el botón, presionar Enter, etcétera
    */
    console.log("El formulario fue enviado y la mascota es: ", this.citaModel)
    alert("Enviado");
  }
   onCreatePost(postData: { Usuario: string; Medico: string; Fecha: Date; Hora: Time }) {
    // Send Http request
    for (var i = 0; i < this.citas.length; i++) {
      if(this.citas[i].Usuario==this.citaModel.Usuario && this.citas[i].Fecha==this.citaModel.Fecha && this.citas[i].Hora==this.citaModel.Hora){
        console.log('La cita ya esta');
        window.alert('Ya tiene una cita programada en la misma fecha y hora');
        let HoraCita: any= document.getElementById("E_Hora");
        HoraCita.focus();
        ValidadorCita= false;
        break;
      }
    }
    if(ValidadorCita){
      this.http.post('https://mediderm-34e3d-default-rtdb.firebaseio.com/posts.json', postData);
      console.log(postData);
      this.data.registrarCita(this.citaModel).subscribe(resp => {
        console.log(resp);
        window.alert('Cita asignada');
        });
    }else{
      ValidadorCita=true;
    }
    
   }

   onDeleteCita(fecha: string, hora: string){
    this.data.encontrarCitas().subscribe((resp: any) => {
      let token;
      Object.keys(resp).forEach(key => {
        if (resp[key].Usuario == this.citaModel.Usuario && resp[key].Fecha == fecha && resp[key].Hora == hora){
          token = key;
        }
      });
      console.log("Token: ",token);
      if(token){
        this.db.remove("/Citas",token);
      }else{
        console.log("Error");
      }

    });
   }
   
}
