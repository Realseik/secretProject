import {
  LanzamientosActionTypes,
  LanzamientosActions
} from './lanzamientos.actions';

export interface ListaLanzamientosState {
  lanzamientos: any[];
  message: string;
}

export const initialState: ListaLanzamientosState = {
  lanzamientos: [],
  message: ''
};

export function reducer(
  state = initialState,
  action: LanzamientosActions
): ListaLanzamientosState {
  switch (action.type) {
    case LanzamientosActionTypes.LoadLanzamientos:
      return { ...state };
    case LanzamientosActionTypes.LanzamientosSaved:
      state.lanzamientos = action.payload;
      return { ...state };
    default:
      return state;
  }
}
