import * as type from "../actions/characterActions";

const initialState = {
  character: null,
};

const character = (state = initialState, action) => {
  switch (action.type) {
    case type.CHOOSE_CHARACTER:
      return {
        ...state,
        character: action.payload
      };
  
    default:
      return state;
  }
};

export default character;
