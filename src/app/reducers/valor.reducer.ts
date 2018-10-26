import { ValorActions, ValorActionTypes } from "./valor.actions";

export interface ValoresState {
  valores: any[];
  lanzamientos: any[];
  numeroLanzamientos: number;
  numeroLanzamientosSeleccionados: number;
  nombreLanzamiento: string;
  message: any;
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
      return { ...state, numeroLanzamientos: state.lanzamientos.length, lanzamientos: action.payload };
    case ValorActionTypes.Saved:
      return { ...state, valores: action.payload };
    case ValorActionTypes.NotSaved:
      return { ...state, message: action.payload };
    case ValorActionTypes.LoadNumLanzamientosSeleccionados:
      return { ...state, numeroLanzamientosSeleccionados: action.payload };
    case ValorActionTypes.LoadNumLanzamientos:
      return { ...state, numeroLanzamientos: action.payload };
    case ValorActionTypes.LoadNombreLanzamiento:
      return { ...state, nombreLanzamiento: action.payload };
    default:
      return state;
  }
}
