import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
