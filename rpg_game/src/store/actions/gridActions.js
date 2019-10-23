import axios from "axios";
export const MAKE_STREET_GRID = "MAKE_STREET_GRID";
export const MAKE_FOREST_GRID = "MAKE_FOREST_GRID";
export const MAKE_HOUSE_GRID = "MAKE_HOUSE_GRID";
export const MAKE_GRAVEYARD_GRID = "MAKE_GRAVEYARD_GRID";

export const MOVE_PLAYER = "MOVE_PLAYER";

export const genericAction = (type, payload, playerPosition) => ({
  type,
  payload,
  playerPosition
});

const url = "http://127.0.0.1:8000/api/adv/rooms";

export const makeForestGrid = () => dispatch =>  {
  axios.get(url).then(res => {
    debugger
    dispatch(genericAction(MAKE_FOREST_GRID, res.data.rooms))
  })
  // return genericAction(MAKE_FOREST_GRID, forestGrid);
};

export const makeStreetGrid = (streetGrid) => {
 return genericAction(MAKE_STREET_GRID, streetGrid);
};


export const makeHouseGrid = (houseGrid) => {
  return genericAction(MAKE_FOREST_GRID, houseGrid);
};

export const makeGraveyardGrid = (graveyardGrid) => {
  return genericAction(MAKE_GRAVEYARD_GRID, graveyardGrid);
};

export const moveThePlayer = (newGrid, playerPosition) => {
  debugger
  return genericAction(MOVE_PLAYER, newGrid, playerPosition);
};

