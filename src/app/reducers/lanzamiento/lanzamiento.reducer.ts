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
      return { ...state, message: action.payload };
    case LanzamientoActionTypes.Saved:
      return { ...state, lanzamiento: action.payload };
    case LanzamientoActionTypes.SaveLanzamiento:
      return { ...state };
    default:
      return { ...state };
  }
}
