import { Component, OnInit } from '@angular/core';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-historia-medica',
  templateUrl: './historia-medica.component.html',
  styleUrls: ['./historia-medica.component.css']
})
export class HistoriaMedicaComponent implements OnInit {

  constructor(private db: ConexionBDService) { }

  historia: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Historia_c").valueChanges().subscribe((data:any) => {
      this.historia = data ;
    });
}


  funcionDivInfo():void{
    let div = document.getElementById("info");
    let div2 = document.getElementById("historia");
    if(div != null && div2 != null){
      div.style.display = "none";
      div2.style.display = "block";
    }
  }

  funcionDivHistoria():void{
    let div = document.getElementById("info");
    let div2 = document.getElementById("historia");
    if(div != null && div2 != null){
      div.style.display = "block";
      div2.style.display = "none";
    }
  }

}
