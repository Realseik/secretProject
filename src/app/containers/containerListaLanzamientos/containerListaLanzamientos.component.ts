
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { GlobalState } from '../../reducers';
import { LoadValores } from '../../reducers/valor.actions';
import { ValoresState } from '../../reducers/valor.reducer';
import { LoadLanzamientos, OrdenarLanzamientos, tipoOrdenacion } from '../../reducers/lanzamientos/lanzamientos.actions';
import { ListaLanzamientosState } from 'src/app/reducers/lanzamientos/lanzamientos.reducer';

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
        return state.lanzamientos;
      })
    );

  }

  onLanzamientoSeleccionado(valorCriterio) {
    this.store.dispatch(new LoadLanzamientos(valorCriterio));
  }

  onCambiarOrden(tipoOrd: tipoOrdenacion) {
    this.store.dispatch(new OrdenarLanzamientos({ tipo: tipoOrd, lanzamientos: this.lanzamientos }));
  }

}
