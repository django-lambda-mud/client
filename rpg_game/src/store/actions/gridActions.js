import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export const MAKE_STREET_GRID = "MAKE_STREET_GRID";
export const MAKE_FOREST_GRID = "MAKE_FOREST_GRID";
export const MAKE_HOUSE_GRID = "MAKE_HOUSE_GRID";
export const MAKE_GRAVEYARD_GRID = "MAKE_GRAVEYARD_GRID";

export const MOVE_PLAYER = "MOVE_PLAYER";

export const genericAction = (type, payload, roomTitle, playerPosition) => ({
  type,
  payload,
  roomTitle,
});

const url = "http://127.0.0.1:8000/api/adv";

export const makeForestGrid = (startOfGame, direction) => dispatch => {
  if (startOfGame) {
    // we must check if the game starts and initialize else we make normal get request
    axiosWithAuth()
      .get(`${url}/init/`)
      .then(res => {
        dispatch(genericAction(MAKE_FOREST_GRID, res.data.rooms));
      });
  } else {
    axios.get(`${url}/rooms/`).then(res => {
      dispatch(genericAction(MAKE_FOREST_GRID, res.data.rooms));
      setTimeout(() => , 1000) // we also must update the movement if we are currently in the game
    });
  }
};

export const makeStreetGrid = () => dispatch => {
  axios.get(`${url}/rooms/`).then(res => {
    dispatch(genericAction(MAKE_STREET_GRID, res.data.rooms));
  });
};

export const makeHouseGrid = houseGrid => {
  return genericAction(MAKE_FOREST_GRID, houseGrid);
};

export const makeGraveyardGrid = graveyardGrid => {
  return genericAction(MAKE_GRAVEYARD_GRID, graveyardGrid);
};

export const moveThePlayer = (
  playerPosition,
  direction
) => dispatch => {
  const reqBody = { direction: direction };

  axiosWithAuth()
    .post(`${url}/move/`, reqBody)
    .then(res => {
      dispatch(genericAction(MOVE_PLAYER, playerPosition, res.title));
    });
};
