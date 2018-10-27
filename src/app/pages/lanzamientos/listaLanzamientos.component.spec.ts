import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLanzamientosComponent } from './listaLanzamientos.component';

describe('LanzamientosComponent', () => {
  let component: ListaLanzamientosComponent;
  let fixture: ComponentFixture<ListaLanzamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLanzamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLanzamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
