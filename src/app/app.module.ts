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

import localePy from '@angular/common/locales/es-PY';
import {registerLocaleData} from "@angular/common";
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import {ReactiveFormsModule} from "@angular/forms";
registerLocaleData(localePy, 'es');

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
    ConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
      ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
