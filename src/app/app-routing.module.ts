import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SedesComponent } from './pages/sedes/sedes.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AgendaCitaComponent } from './pages/agenda-cita/agenda-cita.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'sedes', component: SedesComponent },
  {path: 'servicios', component: ServiciosComponent },
  {path: 'agendacita', component: AgendaCitaComponent },
  {path: 'medicos', component: MedicosComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
