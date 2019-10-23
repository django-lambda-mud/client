import * as type from "../actions/gridActions";
import createForest from "../../components/Maps/Forest/ForestFunctions";

const initialState = {
  grid: null,
  playerPosition: null,
  loading: null,
  error: null
};

const rows = 10;
const cols = 10;

// const addNeighbors = (grid, i, j) => {
//   if (i < rows - 1) {
//     grid[i][j].neighbors.push(grid[i + 1][j]);
//   }
//   if (i > 0) {
//     grid[i][j].neighbors.push(grid[i - 1][j]);
//   }
//   if (j < cols - 1) {
//     grid[i][j].neighbors.push(grid[i][j + 1]);
//   }
//   if (j > 0) {
//     grid[i][j].neighbors.push(grid[i][j - 1]);
//   }
// };

// // const array = [...rooms.rooms];

// grid = [];

// tempArray = [];
// keepTrackOfIndex = 9

// for (let i = 0; i < array.length; i++) {
// if(keepTrackOfIndex === i) {
//   keepTrackOfIndex += 10;
//   tempArray.push(array[i]);
//   grid.push(tempArray);
//   tempArray = [];
// } else {
//   tempArray.push(array[i]);
// }
// }

// const rows = 10;
// const cols = 10;

// const createForest = (grid) => {
// for (let i = 0; i < rows; i++) {
//   const currentRow = [];
//   for (let j = 0; j < cols; j++) {
//     currentRow.push(createNode(i, j));
//   }
//   grid.push(currentRow);
// }

// for (let i = 0; i < rows; i++) {
//   for (let j = 0; j < cols; j++) {
//     addNeighbors(grid, i, j);
//   }
// }

// return grid;
// };

// const createNode = (i, j) => {
// return {
//   i: i,
//   j: j,
//   start: i === 0 && j === 0, // create start point
//   neighbors: [],
//   treeOne:
//     (i === 0 && j === 2) ||
//     (i === 0 && j === 3) ||
//     (i === 0 && j === 4) ||
//     (i === 1 && j === 2) ||
//     (i === 2 && j === 2) ||
//     (i === 1 && j === 4) ||
//     (i === 2 && j === 4) ||
//     (i === 0 && j === 5) ||
//     (i === 0 && j === 6) ||
//     (i === 2 && j === 5),
//   treeTwo:
//     (i === 5 && j === 5) || (i === 5 && j === 6) || (i === 5 && j === 7),
//   treeThree:
//     (i === 8 && j === 0) ||
//     (i === 9 && j === 0) ||
//     (i === 9 && j === 1) ||
//     (i === 9 && j === 2) ||
//     (i === 9 && j === 4) ||
//     (i === 9 && j === 5) ||
//     (i === 9 && j === 6) ||
//     (i === 9 && j === 7) ||
//     (i === 9 && j === 8) ||
//     (i === 9 && j === 9),
//   grave: i === 0 && j === 8,
//   goldOne: i === 0 && j === 9,
//   // toStreet: i === 0 && j === 14,
//   // toHouse: i === 9 && j === 3
//   // add other neccessary key value pairs for more functionality
// };
// };

// const addNeighbors = (grid, i, j) => {
// if (i < rows - 1) {
//   grid[i][j].neighbors.push(grid[i + 1][j]);
// }
// if (i > 0) {
//   grid[i][j].neighbors.push(grid[i - 1][j]);
// }
// if (j < cols - 1) {
//   grid[i][j].neighbors.push(grid[i][j + 1]);
// }
// if (j > 0) {
//   grid[i][j].neighbors.push(grid[i][j - 1]);
// }
// };


const grid = (state = initialState, action) => {
  switch (action.type) {
    case type.MAKE_FOREST_GRID:
      let rooms = action.payload;
      
      let grid = [];
      let tempArray = [];
      let keepTrackOfIndex = 9;
      
      for (let i = 0; i < rooms.length; i++) {
        if (keepTrackOfIndex === i) {
          keepTrackOfIndex += 10;
          tempArray.push(rooms[i]);
          grid.push(tempArray);
          tempArray = [];
        } else {
          tempArray.push(rooms[i]);
        }
      }
      
      const forest = createForest([]);
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          grid[i][j].i = forest[i][j].i;
          grid[i][j].j = forest[i][j].j;
          grid[i][j].start = forest[i][j].start;
          grid[i][j].neighbors = forest[i][j].neighbors;
          grid[i][j].treeOne = forest[i][j].treeOne;
          grid[i][j].treeTwo = forest[i][j].treeTwo;
          grid[i][j].treeThree = forest[i][j].treeThree;
          grid[i][j].grave = forest[i][j].grave;
          grid[i][j].goldOne = forest[i][j].goldOne;
        }
      }

      return {
        ...state,
        grid: grid,
        playerPosition: grid[0][0]
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

      const newGrid = state.grid.map(room => {
        if(room.title === action.roomTitle){
          room.start = true
        }
        if(room.title === state.playerPosition.title) {
          room.start = false
        }
        return room;
      });

      return {
        ...state,
        grid: newGrid,
        playerPosition: action.playerPosition
      };

    default:
      return state;
  }
};

export default grid;
