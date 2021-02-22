import { ADD_MUSIC, SELECTED_MUSIC } from "./types";

export const addMusic = (data: any) => {
  return {
    type: ADD_MUSIC,
    payload: data,
  };
};

export const selectedMusic = (data: any) => {
  return {
    type: SELECTED_MUSIC,
    payload: data,
  };
};
