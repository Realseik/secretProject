import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Store } from '@ngrx/store';
import { GlobalState } from '../reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoadLanzamiento } from '../reducers/lanzamiento/lanzamiento.actions';
import { tipoOrdenacion } from '../reducers/lanzamientos/lanzamientos.actions';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './listaLanzamientos.component.html',
  styleUrls: ['./listaLanzamientos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaLanzamientosComponent implements OnInit {
  public lanzs: any[];
  public contadorLanzamientos: number;

  @Input()
  public lanzamientos: any[];
  @Output()
  lanzamientoSeleccionado = new EventEmitter<string>();
  @Output()
  cambiarOrden = new EventEmitter<string>();

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.lanzamientos = [];
  }

  Ordenar(tipo: string) {
    let tipoOrden: tipoOrdenacion;
    if (tipo === 'ASC') {
      tipoOrden = tipoOrdenacion.Ascendente;
    } else {
      tipoOrden = tipoOrdenacion.Descendiente;
    }
    this.cambiarOrden.emit(tipoOrden);
  }

}
