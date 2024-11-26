import {Component, OnInit} from '@angular/core';
import {Tareas} from "../services/interfaces/tareas";
import {ListaTareasExamenComponent} from "../lista-tareas-examen/lista-tareas-examen.component";
import {TareasService} from "../services/tareas.service";

@Component({
  selector: 'app-detalle-tarea-examen',
  templateUrl: './detalle-tarea-examen.component.html',
  styleUrl: './detalle-tarea-examen.component.scss'
})
export class DetalleTareaExamenComponent implements OnInit {
  tarea: Tareas | null = null;

  constructor(
      private tareaService: TareasService
  ) {
  }
  ngOnInit() {
    this.tareaService.tarea$.subscribe((tarea: Tareas | null) => {
      this.tarea = tarea;
    });
  }
}
