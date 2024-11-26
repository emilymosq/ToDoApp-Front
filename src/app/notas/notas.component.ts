import {Component, OnInit} from '@angular/core';
import {Nota} from "../services/interfaces/nota";
import {NotasService} from "../services/notas.service";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})
export class NotasComponent implements OnInit{
  notas: Nota[] = [];

  constructor(
      private notasService: NotasService
  ) {
  }

  ngOnInit():void{
    this.notasService.notas.subscribe((notas:Nota[])=> {
      this.notas = notas;
    })
  }
}
