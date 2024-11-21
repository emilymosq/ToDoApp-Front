import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {InicioComponent} from "./inicio/inicio.component";
import {NuevaNotaComponent} from "./nueva-nota/nueva-nota.component";

const routes: Routes = [
  {path: "", component: LayoutSinHeaderComponent, children: [
      {path: "", component: LoginComponent}
      //{path: "", component: RegisterComponent}
    ]},
  {path: "app", component: LayoutConHeaderComponent, children: [
      {path: "inicio", component: InicioComponent},
          {path: "nueva-nota", component: NuevaNotaComponent}
      //{path: "settings", component: SettingsComponent},
      //
    ]},
    {path: "**", component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
