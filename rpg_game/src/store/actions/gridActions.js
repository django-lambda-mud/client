import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

export const MAKE_STREET_GRID = "MAKE_STREET_GRID";
export const MAKE_FOREST_GRID = "MAKE_FOREST_GRID";
export const MAKE_HOUSE_GRID = "MAKE_HOUSE_GRID";
export const MAKE_GRAVEYARD_GRID = "MAKE_GRAVEYARD_GRID";

export const MOVE_PLAYER = "MOVE_PLAYER";
export const ROOM_INFO = "ROOM_INFO";

export const genericAction = (type, payload, roomTitle, players) => ({
  type,
  payload,
  roomTitle,
  players
});

const url = "https://muddyapp.herokuapp.com/api/adv";

export const sendMessage = payload => dispatch => {
  axios.post(`${url}/say`, payload);
};

export const makeForestGrid = () => dispatch => {
  let currentPosition;
  axiosWithAuth().get(`${url}/init/`)
  .then(res => {
    dispatch(genericAction(ROOM_INFO, res.data))
      debugger
      currentPosition = res.data.title;
      const players = res.data.player;
      return axios.get(`${url}/rooms/`).then(res => {
        debugger
        if (Number(currentPosition) < 99) {
          dispatch(
            genericAction(MAKE_FOREST_GRID, res.data.rooms, currentPosition, players)
          );
        } else {

          dispatch(
            genericAction(MAKE_STREET_GRID, res.data.rooms, currentPosition, players)
          );
        }
      });
    });
};

export const makeStreetGrid = streetGrid => dispatch => {
  let currentPosition;
  axiosWithAuth()
    .get(`${url}/init/`)
    .then(res => {
      currentPosition = res.data.title;
      const players = res.data.player;
      return axios.get(`${url}/rooms/`).then(res => {

        dispatch(
          genericAction(MAKE_STREET_GRID, res.data.rooms, currentPosition, players)
        );
      });
    });
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
          const players = res.data.player;            
          return axios.get(`${url}/rooms/`).then(res => {
            dispatch(
              genericAction(MAKE_STREET_GRID, res.data.rooms, currentPosition, players)
            );
          });
        });
    } else if (res.data.title === "0") {
      axiosWithAuth()
        .get(`${url}/init/`)
        .then(res => {
          const players = res.data.player;
          return axios.get(`${url}/rooms/`).then(res => {
            dispatch(
              genericAction(MAKE_FOREST_GRID, res.data.rooms, currentPosition, players)
            );
          });
        });
    } else {
      dispatch(genericAction(MOVE_PLAYER, currentPosition));
    }
  });
};
