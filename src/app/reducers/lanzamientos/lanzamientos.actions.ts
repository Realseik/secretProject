import { Action } from '@ngrx/store';

export enum LanzamientosActionTypes {
  LoadLanzamientos = '[Lanzamientos] Load Lanzamientos',
  LanzamientosSaved = '[Lanzamientos] Lanzamientos Saved',
  SaveOrden = '[Lanzamientos] Lanzamientos Saved',
}

export enum tipoOrdenacion {
  Ascendente = 'ASC',
  Descendiente = 'DESC',
}

export class LoadLanzamientos implements Action {
  readonly type = LanzamientosActionTypes.LoadLanzamientos;
  constructor(readonly payload: string) { }
}

export class LanzamientosSaved implements Action {
  readonly type = LanzamientosActionTypes.LanzamientosSaved;
  constructor(readonly payload: any[]) { }
}

export class SaveOrden implements Action {
  readonly type = LanzamientosActionTypes.SaveOrden;
  constructor(readonly payload: any) { }
}

export type LanzamientosActions = LoadLanzamientos | LanzamientosSaved | SaveOrden;
