import { LoadLanzamiento } from './../../reducers/lanzamiento/lanzamiento.actions';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { map } from 'rxjs/operators';
import { GlobalState } from '../../reducers';
import { LoadValores } from '../../reducers/valor.actions';
import { LanzamientoState } from '../../reducers/lanzamiento/lanzamiento.reducer';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';

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
        return state.lanzamiento;
      })
    );

  }

}
