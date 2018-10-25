import { Action } from '@ngrx/store';

export enum LanzamientosActionTypes {
  OrdenarLanzamientos = '[Lanzamientos] Ordenar Lanzamientos',
  LoadLanzamientos = '[Lanzamientos] Load Lanzamientos',
  LanzamientosSaved = '[Lanzamientos] Lanzamientos Saved',
}

export enum tipoOrdenacion {
  Ascendente = 'ASC',
  Descendiente = 'DESC',
}

export class LoadLanzamientos implements Action {
  readonly type = LanzamientosActionTypes.LoadLanzamientos;
  constructor(readonly payload: string) { }
}

export class OrdenarLanzamientos implements Action {
  readonly type = LanzamientosActionTypes.OrdenarLanzamientos;
  constructor(readonly payload: {tipo: tipoOrdenacion, lanzamientos: any[]}) { }
}

export class LanzamientosSaved implements Action {
  readonly type = LanzamientosActionTypes.LanzamientosSaved;
  constructor(readonly payload: any[]) { }
}

export type LanzamientosActions = LoadLanzamientos | LanzamientosSaved | OrdenarLanzamientos;
