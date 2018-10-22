import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ValorActionTypes, LoadValores, Saved } from './valor.actions';
import { mergeMap, map } from 'rxjs/operators';
import { DataService } from '../services/data.service';


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

  constructor(private actions$: Actions, private data: DataService) { }

}
