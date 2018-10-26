
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { GlobalState } from '../../reducers';
import { LoadValores } from '../../reducers/valor.actions';
import { ValoresState } from '../../reducers/valor.reducer';
import { LoadLanzamientos } from '../../reducers/lanzamientos/lanzamientos.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-containerBuscador',
  templateUrl: './containerBuscador.component.html',
  styleUrls: ['./containerBuscador.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerBuscadorComponent implements OnInit {
  public valores$: Observable<any>;
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
    this.valores$ = this.store.select('valores').pipe(
      map((stateValores: ValoresState) => {
        return stateValores.valores;
      })
    );
  }

  onValorSeleccionado(valorCriterio) {
    this.store.dispatch(new LoadLanzamientos(valorCriterio));
  }

}
