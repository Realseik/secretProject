import { LanzamientosSaved, SaveOrden } from '../../reducers/lanzamientos/lanzamientos.actions';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GlobalState } from '../../reducers';
import { LoadValores, LoadNumLanzamientos, LoadNumLanzamientosSeleccionados } from '../../reducers/valor.actions';
import { ValoresState } from '../../reducers/valor.reducer';
import { LoadLanzamientos } from '../../reducers/lanzamientos/lanzamientos.actions';
import { ListaLanzamientosState } from '../../reducers/lanzamientos/lanzamientos.reducer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-containerLista',
  templateUrl: './containerListaLanzamientos.component.html',
  styleUrls: ['./containerListaLanzamientos.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerListaLanzamientosComponent implements OnInit {
  public lanzamientos$: Observable<any>;
  private lanzamientos: any[];

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.loadData();
    this.observeLaunches();
  }

  loadData = () => {
    this.store.dispatch(new LoadValores());
  }

  observeLaunches = () => {
    this.lanzamientos$ = this.store.select('listaLanzamientos').pipe(
      map((state: ListaLanzamientosState) => {
        this.lanzamientos = state.lanzamientos;
        this.store.dispatch(new LoadNumLanzamientosSeleccionados(this.lanzamientos.length));
        return state.lanzamientos;
      })
    );

  }

  onLanzamientoSeleccionado(valorCriterio) {
    this.store.dispatch(new LoadLanzamientos(valorCriterio));
  }

  // TODO: Esto se podria optimizar
  onCambiarOrden(tipoOrd: string) {
    if (tipoOrd === 'ASC') {
      this.lanzamientos.sort(this.rastreatorASC);
    } else {
      this.lanzamientos.sort(this.rastreatorDESC);
    }
    // No considero que haga falta guardar el Orden seleccionado, con los lanzamientos es suficiente para offline
    this.store.dispatch(new LanzamientosSaved(this.lanzamientos));
  }

  rastreatorASC = (inicial, final) => {
    if (inicial.fecha < final.fecha) { return -1; }
    if (inicial.fecha > final.fecha) { return 1; }
    return 0;
  }

  rastreatorDESC = (inicial, final) => {
    if (inicial.fecha > final.fecha) { return -1; }
    if (inicial.fecha < final.fecha) { return 1; }
    return 0;

  }
}
