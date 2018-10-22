
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { GlobalState } from '../../reducers';
import { LoadValores } from '../../reducers/valor.actions';
import { ValoresState } from '../../reducers/valor.reducer';
import { LoadLanzamientos } from '../../reducers/lanzamientos/lanzamientos.actions';

// import { LoadLanzamiento } from '../reducers/lanzamiento/lanzamiento.actions';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-containerLanzamiento',
  templateUrl: './containerLanzamiento.component.html',
  styleUrls: ['./containerLanzamiento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerLanzamientosComponent implements OnInit {

  public lanzamiento$: Observable<any>;

  constructor(private store: Store<GlobalState>) { }

  ngOnInit() {
    this.loadData();
    this.observeLaunches();
  }

  loadData = () => {
    this.store.dispatch(new LoadValores());
  }

  observeLaunches = () => {

    this.lanzamiento$ = this.store.select('lanzamiento').pipe(
      map((stateValores: ValoresState) => {
        return stateValores.valores;
      })
    );

    // this.lanzamientos$ = this.store.select('lanzamientos').pipe(
    //   map(stateLanzamientos => {
    //     return stateLanzamientos.lanzamientos;
    //   })
    // );

    // this.lanzamiento$ = this.store.select('lanzamiento').pipe(
    //   map(stateLanzamientos => {
    //     return stateLanzamientos.lanzamientos;
    //   })
    // );
  }

  // onCriterioSeleccionado(criterio) {
  //   this.criterio = criterio;
  //   this.store.dispatch(new LoadValores());
  // }

  onValorSeleccionado(valorCriterio) {
    this.store.dispatch(new LoadLanzamientos(valorCriterio));
  }

  // onLanzamientoSeleccionado(lanzamiento) {
  //   this.store.dispatch(new LoadLanzamiento(lanzamiento));
  // }

}
