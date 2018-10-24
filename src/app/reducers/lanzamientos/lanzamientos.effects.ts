import {
  LanzamientosActionTypes,
  LanzamientosSaved,
  LanzamientosActions
} from './lanzamientos.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../../services/data.service';

@Injectable()
export class LanzamientosEffects {
  @Effect()
  public load$ = this.actions$
    .ofType(LanzamientosActionTypes.LoadLanzamientos)
    .pipe(
      mergeMap((action: LanzamientosActions) =>
        this.data
          .leerLanzamientos(action.payload)
          .pipe(map(criterios => new LanzamientosSaved(criterios)))
      )
    );

    @Effect()
    public ordenar$ = this.actions$
      .ofType(LanzamientosActionTypes.OrdenarLanzamientos)
      .pipe(
        mergeMap((action: LanzamientosActions) =>
          this.data
            .leerLanzamientos(action.payload)
            .pipe(map(criterios => new LanzamientosSaved(criterios)))
        )
      );

  constructor(private actions$: Actions, private data: DataService) {}
}
