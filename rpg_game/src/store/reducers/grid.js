import * as type from "../actions/gridActions";

const initialState = {
  grid: null,
  playerPosition: null,
  loading: null,
  error: null
};

const rows = 10;
const cols = 15;

const addNeighbors = (grid, i, j) => {
  if (i < rows - 1) {
    grid[i][j].neighbors.push(grid[i + 1][j]);
  }
  if (i > 0) {
    grid[i][j].neighbors.push(grid[i - 1][j]);
  }
  if (j < cols - 1) {
    grid[i][j].neighbors.push(grid[i][j + 1]);
  }
  if (j > 0) {
    grid[i][j].neighbors.push(grid[i][j - 1]);
  }
};

const grid = (state = initialState, action) => {
  switch (action.type) {
    case type.MAKE_FOREST_GRID:
      let grid = action.payload.rooms;

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          addNeighbors(grid, i, j);
        }
      }
      
      return {
        ...state,
        grid: grid,
        playerPosition: grid.playerPosition,
      };

    case type.MAKE_STREET_GRID:
      return {
        ...state,
        grid: action.payload
      };

    case type.MAKE_HOUSE_GRID:
      return {
        ...state,
        grid: action.payload
      };

    case type.MAKE_GRAVEYARD_GRID:
      return {
        ...state,
        grid: action.payload
      };

    case type.MOVE_PLAYER:
          return {
            ...state,
            grid: action.payload,
            playerPosition: action.playerPosition
          };

    default:
      return state;
  }
};

export default grid;
