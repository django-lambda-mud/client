import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export const MAKE_STREET_GRID = "MAKE_STREET_GRID";
export const MAKE_FOREST_GRID = "MAKE_FOREST_GRID";
export const MAKE_HOUSE_GRID = "MAKE_HOUSE_GRID";
export const MAKE_GRAVEYARD_GRID = "MAKE_GRAVEYARD_GRID";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const ROOM_INFO = "ROOM_INFO";

export const genericAction = (type, payload, roomTitle) => ({
  type,
  payload,
  roomTitle
});

const url = "http://127.0.0.1:8000/api/adv";

export const makeForestGrid = () => dispatch => {
  
  let currentPosition;
  axiosWithAuth()
    .get(`${url}/init/`)
    .then(res => {
      debugger
      currentPosition = res.data.title;
      return axios.get(`${url}/rooms/`).then(res => {
        if (Number(currentPosition) < 99) {
          dispatch(
            genericAction(MAKE_FOREST_GRID, res.data.rooms, currentPosition)
          );
        } else {
          
          dispatch(
            genericAction(MAKE_STREET_GRID, res.data.rooms, currentPosition)
          );
        }
      });
    });
};

export const makeStreetGrid = () => dispatch => {
  ;
  let currentPosition;
  axiosWithAuth()
    .get(`${url}/init/`)
    .then(res => {
      currentPosition = res.data.title;
      return axios.get(`${url}/rooms/`).then(res => {
        
        dispatch(
          genericAction(MAKE_STREET_GRID, res.data.rooms, currentPosition)
        );
      });
    });

  axios.get(`${url}/rooms/`).then(res => {});
};

export const makeHouseGrid = houseGrid => {
  return genericAction(MAKE_FOREST_GRID, houseGrid);
};

export const makeGraveyardGrid = graveyardGrid => {
  return genericAction(MAKE_GRAVEYARD_GRID, graveyardGrid);
};

export const moveThePlayer = direction => dispatch => {
  const reqBody = { direction: direction };
  let currentPosition;
  axiosWithAuth()
    .post(`${url}/move/`, reqBody)
    .then(res => {
      
      currentPosition = res.data.title;
      if (res.data.title === "100") {
        axiosWithAuth()
          .get(`${url}/init/`)
          .then(res => {
            
            return axios.get(`${url}/rooms/`).then(res => {
              dispatch(
                genericAction(MAKE_STREET_GRID, res.data.rooms, currentPosition)
              );
            });
          });
      } else if (res.data.title === "0") {
        axiosWithAuth()
          .get(`${url}/init/`)
          .then(res => {
            
            return axios.get(`${url}/rooms/`).then(res => {
              dispatch(
                genericAction(MAKE_FOREST_GRID, res.data.rooms, currentPosition)
              );
            });
          });
      } else {
        dispatch(genericAction(MOVE_PLAYER, currentPosition));
      }
    });
};
