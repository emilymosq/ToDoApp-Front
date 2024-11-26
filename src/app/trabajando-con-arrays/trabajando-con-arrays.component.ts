import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-trabajando-con-arrays',
  templateUrl: './trabajando-con-arrays.component.html',
  styleUrl: './trabajando-con-arrays.component.scss'
})
export class TrabajandoConArraysComponent {
  formulario = FormGroup;

  constructor(
      private formBuilder: FormBuilder
  ) {
    /*this.formulario = this.formBuilder.group({
      nombre: ["", Validators.required],
      edad: [0, Validators.required]
        })*/
  }
}
