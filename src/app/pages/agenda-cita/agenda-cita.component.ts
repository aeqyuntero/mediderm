import { Component, OnInit} from '@angular/core';
import { CitaModel } from "./Models/CitaModel";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Time } from '@angular/common';
import { DataService } from '../dataservices/data.service';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-agenda-cita',
  templateUrl: './agenda-cita.component.html',
  styleUrls: ['./agenda-cita.component.css'],
})
export class AgendaCitaComponent implements OnInit {
  citaModel = new CitaModel("Carlos", "Juan", new Date(), {hours:10,minutes:45} );
  constructor(private _route: ActivatedRoute, private http: HttpClient, private data: DataService, private db: ConexionBDService) {
    console.log(this._route.snapshot.paramMap.get('medico'));
   }
  citas: any[] = [];
  AllCitas: any[] = [];

  ngOnInit(): void {
    this.citaModel.Medico=this._route.snapshot.paramMap.get('medico') || "undefined";
    this.citaModel.Usuario=localStorage.getItem('usuario') || "undefined";
     this.db.getByQuery("/Citas","Usuario",this.citaModel.Usuario).valueChanges().subscribe(data => {
      this.citas = data ;
      //console.log(this.citas);
    });
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
    this.http.post('https://mediderm-34e3d-default-rtdb.firebaseio.com/posts.json', postData);
    console.log(postData);
    this.data.registrarCita(this.citaModel).subscribe(resp => {
      console.log(resp);
      });
   }

   onDeleteCita(fecha: string, hora: string){
    this.data.encontrarCitas().subscribe((resp: any) => {
      let token;
      
      Object.keys(resp).forEach(key => {
        if (resp[key].Usuario == this.citaModel.Usuario && resp[key].Fecha == fecha && resp[key].Hora == hora){
          token = key;
        }
      });

      if(token){
        console.log(token);
        this.db.remove("/Citas",token);
      }else{
        console.log("Error");
      }

    });
   }
   
}
