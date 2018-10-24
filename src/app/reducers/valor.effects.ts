import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValorActionTypes, LoadValores, Saved, ValorActions } from './valor.actions';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { LoadLanzamientos } from './lanzamientos/lanzamientos.actions';


@Injectable()
export class ValorEffects {

  @Effect()
  public save$ = this.actions$
    .ofType(ValorActionTypes.LoadValores)
    .pipe(
      mergeMap((action: LoadValores) =>
        this.data
          .leerValoresCriterio()
          .pipe(map(valores => new Saved(valores)))

      )
    );

  @Effect()
  public load$ = this.actions$
    .ofType(ValorActionTypes.LoadLanzamientos)
    .pipe(
      mergeMap((action: ValorActions) =>
        this.data
          .cargarLanzamientos()
          .pipe(map(criterios => new LoadLanzamientos(criterios)))
      )
    );

  constructor(private actions$: Actions, private data: DataService) { }

}
