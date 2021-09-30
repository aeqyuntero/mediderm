import { Component, OnInit } from '@angular/core';
import { DataService } from '../dataservices/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService,
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

    this.data.encontrarUsuarios().subscribe((resp: any) => {
      
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
