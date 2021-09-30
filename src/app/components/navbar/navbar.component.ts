import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

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

  noSesion(){
    if(localStorage.getItem('token') == null || localStorage.getItem('token') == undefined){
      return true;
    }

    return false;
  }

  logout(){

    localStorage.removeItem('token');
    this.router.navigate(['inicio']);

  }

}
