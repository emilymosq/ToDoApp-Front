import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {InicioComponent} from "./inicio/inicio.component";
import {NuevaNotaComponent} from "./nueva-nota/nueva-nota.component";
import {RegistroComponent} from "./registro/registro.component";
import {ConfiguracionComponent} from "./configuracion/configuracion.component";
<<<<<<< HEAD
import {ListaTareasExamenComponent} from "./lista-tareas-examen/lista-tareas-examen.component";
import {DetalleTareaExamenComponent} from "./detalle-tarea-examen/detalle-tarea-examen.component";
import {TrabajandoConArraysComponent} from "./trabajando-con-arrays/trabajando-con-arrays.component";
=======
>>>>>>> d9d3d599b1aaeb78e777718cd0f427f686c3d9bc

const routes: Routes = [
  {path: "", component: LayoutSinHeaderComponent, children: [
      {path: "", component: LoginComponent},
      {path: "registro", component: RegistroComponent}
    ]},
  {path: "app", component: LayoutConHeaderComponent, children: [
      {path: "inicio", component: InicioComponent},
          {path: "nueva-nota", component: NuevaNotaComponent},
<<<<<<< HEAD
          {path: "config", component: ConfiguracionComponent},
          {path: "lista-tareas", component: ListaTareasExamenComponent},
          {path: "detalle-tarea", component: DetalleTareaExamenComponent},
          {path: "arrays", component: TrabajandoConArraysComponent}
      ]},
=======
          {path: "config", component: ConfiguracionComponent}
    ]},
>>>>>>> d9d3d599b1aaeb78e777718cd0f427f686c3d9bc
    {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
