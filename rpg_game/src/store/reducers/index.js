import { combineReducers } from "redux";
import grid from "./grid";
import character from "./character";
import authentication from "./authentication";

const appReducer = combineReducers({
  grid,
  character,
  authentication,
});

const rootReducer = (state, action) => {
  //clears state on logout
  if (action.type === "LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
