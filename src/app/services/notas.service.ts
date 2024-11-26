import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Nota} from "./interfaces/nota";

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor() { }

  notas: BehaviorSubject<Nota[]> = new BehaviorSubject<any>([
      {id: 1, titulo: "Rutina Mañanera", descripcion: "Despertar temprano, hacer yoga y tomar un desayuno saludable", fecha: "24 nov 2024", etiqueta: "Rutina", prioridad:"Prioridad Baja"}]);

    addNotas(nota: Nota) {
      this.notas.next([...this.notas.getValue(), nota
    ]);
  }
}
