import {
  LanzamientosActionTypes,
  LanzamientosActions
} from './lanzamientos.actions';


export interface ListaLanzamientosState {
  lanzamientos: any[];
  orden: string;
  message: string;
}

export const initialState: ListaLanzamientosState = {
  lanzamientos: [],
  orden: '',
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
    case LanzamientosActionTypes.SaveOrden:
      state.orden = action.payload;
      return { ...state };

    default:
      return state;
  }
}
