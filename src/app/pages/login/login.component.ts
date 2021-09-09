import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
}
