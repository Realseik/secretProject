import { mergeMap, map } from 'rxjs/operators';
import { LanzamientoActionTypes, LoadLanzamiento, Saved, NotSaved } from './lanzamiento.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataService } from '../../services/data.service';


@Injectable()
export class LanzamientoEffects {

  @Effect()
  public save$ = this.actions$
    .ofType(LanzamientoActionTypes.LoadLanzamiento)
    .pipe(
      mergeMap((action: LoadLanzamiento) =>
        this.data
          .leerLanzamiento(action.payload)
          .pipe(map(data => {
            if (data) {
              return new Saved(data[0]);
            } else {
              return new NotSaved('No se ha encontrado el lanzamiento indicado');
            }
          }))

      )
    );

  constructor(private actions$: Actions, private data: DataService) { }

}
