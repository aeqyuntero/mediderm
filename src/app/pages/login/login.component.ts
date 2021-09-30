import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { Router } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private db: ConexionBDService,
              private router: Router) { }

  ngOnInit(): void {
  }

  funcion(): void {
    let x = document.getElementById("iniciado");
    let y =document.getElementById("iniciar")
    if(x != null && y != null){
      x.style.display = "block";
      y.style.display = "none";

    }
  }

  login(usuario: any, contrasena: any){

    this.db.getList("Usuarios").subscribe((resp: any) => {
      
      let token;
      
      Object.keys(resp).forEach(key => {
        if (resp[key].nomUsuario == usuario && resp[key].contrasena == contrasena){
          token = key;
        }
      });

      if(token){
  
        localStorage.setItem('token', token);
        this.router.navigate(['inicio']);

      }else{

        this.router.navigate(['login']);

      }

    });

  }

}
