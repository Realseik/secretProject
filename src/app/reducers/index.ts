import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromValor from './valor.reducer';
import * as fromListaLanzamientos from './lanzamientos/lanzamientos.reducer';
import * as fromLanzamiento from './lanzamiento/lanzamiento.reducer';
export interface GlobalState {
  valores: fromValor.ValoresState;
  listaLanzamientos: fromListaLanzamientos.State;
  lanzamiento: fromLanzamiento.State;
  router: any;
}

export const reducers: ActionReducerMap<GlobalState> = {
  valores: fromValor.reducer,
  listaLanzamientos: fromListaLanzamientos.reducer,
  lanzamiento: fromLanzamiento.reducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<GlobalState>[] = !environment.production
  ? []
  : [];
