import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {filter} from "rxjs";
import {EnviarEstadoService} from "../services/enviar-estado.service";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private enviarEstadoService: EnviarEstadoService) {
    this.formulario = this.formBuilder.group({
      estado: ["", [Validators.required]],
    });
  }

  enviarEstado() {
    this.enviarEstadoService.setEstado(this.formulario.value.estado);

  }


}
