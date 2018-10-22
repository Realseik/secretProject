import { Action } from '@ngrx/store';

export enum ValorActionTypes {
  LoadValores = '[Valor] Load Valores',
  SaveValores = '[Valor] Save Valores',
  Saved = '[Valor] Saved',
  NotSaved = '[Valor] Not Saved'
}

export class LoadValores implements Action {
  readonly type = ValorActionTypes.LoadValores;
}

export class SaveValores implements Action {
  readonly type = ValorActionTypes.SaveValores;
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

export type ValorActions = LoadValores | SaveValores | Saved | NotSaved;
