import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export const MAKE_STREET_GRID = "MAKE_STREET_GRID";
export const MAKE_FOREST_GRID = "MAKE_FOREST_GRID";
export const MAKE_HOUSE_GRID = "MAKE_HOUSE_GRID";
export const MAKE_GRAVEYARD_GRID = "MAKE_GRAVEYARD_GRID";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const ROOM_INFO = "ROOM_INFO";

export const genericAction = (type, payload, roomTitle, playerPosition) => ({
  type,
  payload,
  roomTitle,
  playerPosition
});

const url = "http://127.0.0.1:8000/api/adv";

export const makeForestGrid = () => dispatch =>  {
  axiosWithAuth().get(`${url}/init/`).then(res => {
    dispatch(genericAction(ROOM_INFO, res.data))
   return axios.get(`${url}/rooms/`).then(res => {
      dispatch(genericAction(MAKE_FOREST_GRID, res.data.rooms))
    })
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

export const moveThePlayer = (newGrid, playerPosition, direction) => dispatch => {
  const reqBody = {direction: direction};
   
  axiosWithAuth().post(`${url}/move/`, reqBody).then(res => {
     dispatch(genericAction(MOVE_PLAYER, newGrid, res.title, playerPosition ));

     return axiosWithAuth().get(`${url}/init/`).then(res => {
      dispatch(genericAction(ROOM_INFO, res.data))
     })
  });
};

