import { createStore, combineReducers } from "redux";
import musicReducer from "./music/reducer";

const rootReducers = combineReducers({ music: musicReducer });

export const store = createStore(rootReducers);
