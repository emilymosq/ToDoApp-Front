import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasBusquedaComponent } from './notas-busqueda.component';

describe('NotasBusquedaComponent', () => {
  let component: NotasBusquedaComponent;
  let fixture: ComponentFixture<NotasBusquedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NotasBusquedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasBusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
