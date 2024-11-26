import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotasService} from "../services/notas.service";
import {Nota} from "../services/interfaces/nota";
import {Router} from "@angular/router";


@Component({
  selector: 'app-nueva-nota',
  templateUrl: './nueva-nota.component.html',
  styleUrl: './nueva-nota.component.scss'
})
export class NuevaNotaComponent {
  notaForm!: FormGroup;
  prioridades: string[] = ['Prioridad Alta', 'Prioridad Media', 'Prioridad Baja'];



  constructor( private router: Router,
               private fb: FormBuilder,
               private notasService: NotasService
  ) {}

  ngOnInit(): void {
    this._createForm();
  }

  private _createForm(): void {
    this.notaForm = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      etiqueta: ['', [Validators.required]],
      prioridad: ['', Validators.required],
    });
  }

  agregarNota(): void {
    if (this.notaForm.valid) {

      const fechaActual = new Date();
      const fechaFormateada = new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }).format(fechaActual);

      const nuevaNota: Nota = {
        ...this.notaForm.value,
        fecha: fechaFormateada};
      this.notasService.addNotas(nuevaNota);
      this.router.navigateByUrl('/app/inicio');
      this.notaForm.reset();
    } else {
      alert('Por favor, completa todos los campos');
    }
  }
}
