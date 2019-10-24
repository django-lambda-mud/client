import * as type from "../actions/gridActions";
import createForest from "../../components/Maps/Forest/ForestFunctions";

const initialState = {
  grid: null,
  playerPosition: null,
  loading: null,
  error: null,
  currentRoom: null,
};

const rows = 10;
const cols = 10;


const grid = (state = initialState, action) => {
  switch (action.type) {
    case type.ROOM_INFO:
      return {
        ...state,
        currentRoom: action.payload,
      }
      

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
