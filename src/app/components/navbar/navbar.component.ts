import { Component, OnInit } from '@angular/core';
import { MedicosComponent } from 'src/app/pages/medicos/medicos.component';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private db: ConexionBDService) { }

  medicos: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Medicos").subscribe(data => {
      this.medicos = data ;
    });
}
  
  funcion(): void {
    let x = document.getElementById("iniciado");
    let y = document.getElementById("iniciar");
    if(x != null && y != null){
      x.style.display = "none";
      y.style.display = "block";
    }
  }

}
