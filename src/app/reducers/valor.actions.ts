import { Action } from '@ngrx/store';

export enum ValorActionTypes {
  LoadValores = '[Valor] Load Valores',
  LoadLanzamientos = '[Valor] Load Lanzamientos',
  LoadNumLanzamientos = '[Valor] Load Numero Lanzamientos',
  LoadNombreLanzamiento = '[Valor] Load nombre lanzamiento',
  LoadNumLanzamientosSeleccionados = '[Valor] Load Numero Lanzamientos Seleccionados',
  SaveLanzamientos = '[Valor] Save Lanzamientos',
  Saved = '[Valor] Saved',
  NotSaved = '[Valor] Not Saved'

}

export class LoadValores implements Action {
  readonly type = ValorActionTypes.LoadValores;
}

export class LoadLanzamientos implements Action {
  readonly type = ValorActionTypes.LoadLanzamientos;
}

export class LoadNumLanzamientos implements Action {
  readonly type = ValorActionTypes.LoadNumLanzamientos;
  constructor(public readonly payload: number) { }
}

export class LoadNombreLanzamiento implements Action {
  readonly type = ValorActionTypes.LoadNombreLanzamiento;
  constructor(public readonly payload: string) { }
}

export class LoadNumLanzamientosSeleccionados implements Action {
  readonly type = ValorActionTypes.LoadNumLanzamientosSeleccionados;
  constructor(public readonly payload: number) { }
}

export class SaveLanzamientos implements Action {
  readonly type = ValorActionTypes.SaveLanzamientos;
  constructor(public readonly payload?: any[]) { }
}

export class Saved implements Action {
  readonly type = ValorActionTypes.Saved;
  constructor(public readonly payload: any[]) { }
}

export class NotSaved implements Action {
  readonly type = ValorActionTypes.NotSaved;
  constructor(public readonly payload?: any[]) { }
}

export type ValorActions = LoadValores |
  LoadLanzamientos | LoadNumLanzamientos | LoadNombreLanzamiento |
  LoadNumLanzamientosSeleccionados | SaveLanzamientos | Saved | NotSaved;
