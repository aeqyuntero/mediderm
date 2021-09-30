import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateTimePickerModule } from "@syncfusion/ej2-angular-calendars";
import { FormsModule } from '@angular/forms';

//Páginas
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SedesComponent } from './pages/sedes/sedes.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MedicosComponent } from './pages/medicos/medicos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AgendaCitaComponent } from './pages/agenda-cita/agenda-cita.component';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';
import { HistoriaMedicaComponent } from './pages/historia-medica/historia-medica.component';
import { HttpClientModule } from '@angular/common/http';
import { MedicoComponent } from './pages/medico/medico.component';


//Servicios

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { ConexionBDService } from './services/conexion-bd.service';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    InicioComponent,
    RegistroComponent,
    SedesComponent,
    ContactoComponent,
    MedicosComponent,
    ServiciosComponent,
    AgendaCitaComponent,
    EditarUsuarioComponent,
    HistoriaMedicaComponent,
    MedicoComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DateTimePickerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [
    ConexionBDService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }