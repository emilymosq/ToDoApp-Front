import {Component, OnInit} from '@angular/core';
import {Tareas} from "../services/interfaces/tareas";
import {TareasService} from "../services/tareas.service";
import {Router} from "@angular/router";
import {EnviarEstadoService} from "../services/enviar-estado.service";


@Component({
  selector: 'app-lista-tareas-examen',
  templateUrl: './lista-tareas-examen.component.html',
  styleUrl: './lista-tareas-examen.component.scss'
})
export class ListaTareasExamenComponent implements OnInit {
  tareas: Tareas[] = [
    {id: 1, nombre: "Tarea 1", descripcion: "sdsd", estado: "pendiente"},
    {id: 2, nombre: "Tarea 2", descripcion: "sdsdsd", estado: "finalizado"},
    {id: 3, nombre: "Tarea 3", descripcion: "sdsds", estado: "pendiente"},
    {id: 4, nombre: "Tarea 4", descripcion: "sdds", estado: "finalizado"},
    {id: 5, nombre: "Tarea 5", descripcion: "sdsds", estado: "pendiente"},
    {id: 6, nombre: "Tarea 6", descripcion: "sddsds", estado: "finalizado"},

  ];
  estado: string = "todos";

  constructor(
      private tareaService: TareasService,
      private router : Router,
      private enviarEstadoService: EnviarEstadoService
  ) {
  }

  ngOnInit() {
    this.enviarEstadoService.estado$.subscribe(value => {
      this.estado = value;
    })
  }

  enviarTarea(tarea : Tareas){
    this.tareaService.setTareas(tarea);
    this.router.navigate(['/app/detalle-tarea']);
  }
}
