import { Component } from '@angular/core';
import {Nota} from "../services/interfaces/nota";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})
export class NotasComponent {
  nota: Nota [] = [
    {id: 1, titulo: "Rutina Mañanera", descripcion: "Despertar temprano, hacer yoga y tomar un desayuno saludable", fecha: "24/11/2024"},
    {id: 2, titulo: "Entrenamiento", descripcion: "Realizar ejercicios de fuerza y cardio para mantenerme en forma", fecha: "23/11/2024"},
    {id: 3, titulo: "Compras del super", descripcion: "Dedicar tiempo a mis tareas laborales y estudiar para mejorar mis habilidades", fecha: "22/11/2024"},
    {id: 4, titulo: "Rutina Nocturna", descripcion: "Desconectar de dispositivos, leer un libro y meditar antes de dormir", fecha: "21/11/2024"}

  ]
}
