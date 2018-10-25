import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { GlobalState } from '../../reducers';
import { LanzamientoState } from '../../reducers/lanzamiento/lanzamiento.reducer';
import { LoadLanzamiento } from '../../reducers/lanzamiento/lanzamiento.actions';
import { LoadNombreLanzamiento } from '../../reducers/valor.actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-containerLanzamiento',
  templateUrl: './containerLanzamiento.component.html',
  styleUrls: ['./containerLanzamiento.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerLanzamientosComponent implements OnInit {

  public lanzamiento$: Observable<any>;
  private id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<GlobalState>) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadData();
    this.observeLaunches();
  }

  loadData = () => {
    this.store.dispatch(new LoadLanzamiento(this.id));
  }

  observeLaunches = () => {

    this.lanzamiento$ = this.store.select('lanzamiento').pipe(
      map((state: LanzamientoState) => {
        this.store.dispatch(new LoadNombreLanzamiento(state.lanzamiento.name));
        return state.lanzamiento;
      })
    );

  }

}
