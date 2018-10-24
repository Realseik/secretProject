import { LanzamientoActions, LanzamientoActionTypes } from './lanzamiento.actions';

export interface LanzamientoState {
  lanzamiento: any;
  message: string;
}

export const initialState: LanzamientoState = {
  lanzamiento: '',
  message: ''
};

export function reducer(state = initialState, action: LanzamientoActions): LanzamientoState {
  switch (action.type) {
    case LanzamientoActionTypes.LoadLanzamiento:
      return { ...state };
    case LanzamientoActionTypes.NotSaved:
      this.message = action.payload;
      break;
    case LanzamientoActionTypes.Saved:
      state.lanzamiento = action.payload;
      return { ...state };
    case LanzamientoActionTypes.SaveLanzamiento:
      break;
    default:
      return { ...state };
  }
}
