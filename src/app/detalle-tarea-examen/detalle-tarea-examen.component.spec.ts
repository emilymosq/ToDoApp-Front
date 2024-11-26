import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleTareaExamenComponent } from './detalle-tarea-examen.component';

describe('DetalleTareaExamenComponent', () => {
  let component: DetalleTareaExamenComponent;
  let fixture: ComponentFixture<DetalleTareaExamenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleTareaExamenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleTareaExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
