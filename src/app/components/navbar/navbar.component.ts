import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConexionBDService } from 'src/app/services/conexion-bd.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,private db: ConexionBDService) { }

  medicos: any[] = [];
  ngOnInit(): void {
    this.db.getList("/Medicos").valueChanges().subscribe(data => {
      this.medicos = data ;
    });
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
