import { combineReducers } from "redux";
import grid from "./grid";
import character from "./character";
import authentication from "./authentication";

const appReducer = combineReducers({
  grid,
  character,
  authentication
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
