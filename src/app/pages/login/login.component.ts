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

  constructor(private data: DataService,
              private db: ConexionBDService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login(usuario: any, contrasena: any){

    this.db.getObject('Usuarios').valueChanges().subscribe((resp: any) => {
      console.log(resp);
      let token;
      
      Object.keys(resp).forEach(key => {
        if (resp[key].nomUsuario == usuario && resp[key].contrasena == contrasena){
          token = key;
        }
      });

      if(token){
  
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', usuario);
        this.router.navigate(['inicio']);

      }else{

        this.router.navigate(['login']);

      }

    });

  }

}
