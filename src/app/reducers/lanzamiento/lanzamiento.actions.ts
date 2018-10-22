import { Action } from '@ngrx/store';

export enum LanzamientoActionTypes {
  LoadLanzamiento = '[Lanzamiento] Load Lanzamientos',
  SaveLanzamiento = '[Lanzamiento] Save Valors',
  Saved = '[Lanzamiento] Saved',
  NotSaved = '[Lanzamiento] Not Saved'
}

export class LoadLanzamiento implements Action {
  readonly type = LanzamientoActionTypes.LoadLanzamiento;
  constructor(public readonly payload: any[]) { }
}

export class SaveLanzamiento implements Action {
  readonly type = LanzamientoActionTypes.SaveLanzamiento;
  constructor(public readonly payload?: any[]) { }
}

export class Saved implements Action {
  readonly type = LanzamientoActionTypes.Saved;
  constructor(public readonly payload: any[]) { }
}

export class NotSaved implements Action {
  readonly type = LanzamientoActionTypes.NotSaved;
  constructor(public readonly payload: any) { }
}

export type LanzamientoActions = LoadLanzamiento | SaveLanzamiento | Saved | NotSaved;
