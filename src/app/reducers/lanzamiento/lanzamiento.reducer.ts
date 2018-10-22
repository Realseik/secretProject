import { LanzamientoActions, LanzamientoActionTypes } from './lanzamiento.actions';

export interface State {
  data: any;
  message: string;
}

export const initialState: State = {
  data: '',
  message: ''
};

export function reducer(state = initialState, action: LanzamientoActions): State {
  switch (action.type) {
    case LanzamientoActionTypes.LoadLanzamiento:
      return { ...state };
    case LanzamientoActionTypes.NotSaved:
      this.message = action.payload;
      break;
    case LanzamientoActionTypes.Saved:
      state.data = action.payload;
      return { ...state };
    case LanzamientoActionTypes.SaveLanzamiento:
      break;
    default:
      return { ...state };
  }
}
