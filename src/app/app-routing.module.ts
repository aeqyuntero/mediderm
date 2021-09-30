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
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { HistoriaMedicaComponent } from './pages/historia-medica/historia-medica.component';
import { MedicoComponent } from './pages/medico/medico.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'editar', component: EditarUsuarioComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'sedes', component: SedesComponent },
  {path: 'servicios', component: ServiciosComponent },
  {path: 'agendacita/:medico', component: AgendaCitaComponent },
  {path: 'medicos', component: MedicosComponent},
  {path: 'medico/:id', component: MedicoComponent},
  {path: 'historia medica', component: HistoriaMedicaComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
