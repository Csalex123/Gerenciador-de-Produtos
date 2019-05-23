import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioDepartamentoComponent } from './formulario-departamento.component';

describe('FormularioDepartamentoComponent', () => {
  let component: FormularioDepartamentoComponent;
  let fixture: ComponentFixture<FormularioDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
