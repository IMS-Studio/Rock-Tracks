import { ADD_MUSIC, SELECTED_MUSIC } from "./types";

const initialState = {
  list: [],
  selected: null,
};

const musicReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_MUSIC:
      return {
        ...state,
        list: action.payload,
      };
    case SELECTED_MUSIC:
      return {
        ...state,
        selected: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
