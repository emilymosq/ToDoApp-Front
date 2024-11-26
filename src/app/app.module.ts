import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NotasComponent } from './notas/notas.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { NotasBusquedaComponent } from './notas-busqueda/notas-busqueda.component';
import { NuevaNotaComponent } from './nueva-nota/nueva-nota.component';
import { RegistroComponent } from './registro/registro.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BotonExamenComponent } from './boton-examen/boton-examen.component';
import { ListaTareasExamenComponent } from './lista-tareas-examen/lista-tareas-examen.component';
import { DetalleTareaExamenComponent } from './detalle-tarea-examen/detalle-tarea-examen.component';
import { FormularioComponent } from './formulario/formulario.component';
import { TrabajandoConArraysComponent } from './trabajando-con-arrays/trabajando-con-arrays.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NotasComponent,
    LayoutSinHeaderComponent,
    LayoutConHeaderComponent,
    InicioComponent,
    NavbarBottomComponent,
    NotasBusquedaComponent,
    NuevaNotaComponent,
    RegistroComponent,
    ConfiguracionComponent,
    BotonExamenComponent,
    ListaTareasExamenComponent,
    DetalleTareaExamenComponent,
    FormularioComponent,
    TrabajandoConArraysComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
      ReactiveFormsModule,
      FormsModule,
      ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
