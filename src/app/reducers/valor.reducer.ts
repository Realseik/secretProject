import { ValorActions, ValorActionTypes } from "./valor.actions";

export interface ValoresState {
  valores: any[];
  message: string;
}

export const initialState: ValoresState = {
  valores: [],
  message: ''
};

export function reducer(state = initialState, action: ValorActions): ValoresState {
  switch (action.type) {
    case ValorActionTypes.LoadValores:
      return { ...state };
    case ValorActionTypes.SaveValores:
      return state;
    case ValorActionTypes.Saved:
      state.valores = action.payload;
      return { ...state };
    case ValorActionTypes.NotSaved:
      this.message = action.payload;
      break;
    default:
      return state;
  }
}
