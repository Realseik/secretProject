import { ValorActions, ValorActionTypes } from "./valor.actions";

export interface ValoresState {
  valores: any[];
  lanzamientos: any[];
  numeroLanzamientos: number;
  numeroLanzamientosSeleccionados: number;
  nombreLanzamiento: string;
  message: string;
}

export const initialState: ValoresState = {
  valores: [],
  lanzamientos: [],
  numeroLanzamientos: 0,
  numeroLanzamientosSeleccionados: 0,
  nombreLanzamiento: '',
  message: ''
};

export function reducer(state = initialState, action: ValorActions): ValoresState {
  switch (action.type) {
    case ValorActionTypes.LoadValores:
      return { ...state };
    case ValorActionTypes.SaveLanzamientos:
      state.lanzamientos = action.payload;
      state.numeroLanzamientos = state.lanzamientos.length;
      return { ...state };
    case ValorActionTypes.Saved:
      state.valores = action.payload;
      return { ...state };
    case ValorActionTypes.NotSaved:
      this.message = action.payload;
      break;
    case ValorActionTypes.LoadNumLanzamientosSeleccionados:
      state.numeroLanzamientosSeleccionados = action.payload;
      return { ...state };
    case ValorActionTypes.LoadNumLanzamientos:
      state.numeroLanzamientos = action.payload;
      return { ...state };
    default:
      return state;
  }
}
