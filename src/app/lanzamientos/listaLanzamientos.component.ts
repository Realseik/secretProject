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

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './listaLanzamientos.component.html',
  styleUrls: ['./listaLanzamientos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListaLanzamientosComponent implements OnInit {
  public lanzs: any[];
  public lanzamientos$: Observable<any>;

  @Input()
  public lanzamientos: any[];
  @Output()
  lanzamientoSeleccionado = new EventEmitter<string>();

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.lanzamientos = [];
    this.observeLaunches();
  }

  onLanzamientoSeleccionado = (lanzamiento: any) => {
    // this.lanzamientoSeleccionado.emit(lanzamiento);
    this.store.dispatch(new LoadLanzamiento(lanzamiento));
  }

  observeLaunches = () => {
    this.lanzamientos$ = this.store.select('listaLanzamientos').pipe(
      map(stateLanzamientos => {
        return stateLanzamientos.lanzamientos;
      })
    );
  }
}
