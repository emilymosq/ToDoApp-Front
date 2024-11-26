import {Injectable} from '@angular/core';
import {Tareas} from "./interfaces/tareas";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TareasService {
    constructor(
    ) {
    }

    tareas: BehaviorSubject<Tareas | null> = new BehaviorSubject<Tareas | null>(null);
    tarea$: Observable<Tareas|null> = this.tareas.asObservable();

    setTareas(tareas: Tareas|null) {
        this.tareas.next(tareas)
    }

}
