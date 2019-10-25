import * as type from "../actions/gridActions";
import createForest from "../../components/Maps/Forest/ForestFunctions";
import createStreet from "../../components/Maps/Street/StreetFunctions";

const initialState = {
  grid: null,
  playerPosition: null,
  loading: null,
  error: null,
  currentRoom: null
};

const rows = 10;
const cols = 10;

const grid = (state = initialState, action) => {
  switch (action.type) {
    case type.ROOM_INFO:
      return {
        ...state,
        currentRoom: action.payload
      };
      
      case type.MAKE_FOREST_GRID:
        let rooms = action.payload;
        
       // we have a big array with objects // split only the forest world out of it:
      let result = [];

      let i,
        j,
        tempoArray,
        chunk = 100;

      for (i = 0, j = rooms.length; i < j; i += chunk) {
        tempoArray = rooms.slice(i, i + chunk);
        result.push(tempoArray);
      }

      rooms = result[0];


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
      let keepTrackOfCurrentForestPosition;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j].title === action.roomTitle) {
            grid[i][j].start = true;
            keepTrackOfCurrentForestPosition = grid[i][j];
          } else {
            grid[i][j].start = false;
          }
          grid[i][j].i = forest[i][j].i;
          grid[i][j].j = forest[i][j].j;
          grid[i][j].neighbors = forest[i][j].neighbors;
          grid[i][j].treeOne = forest[i][j].treeOne;
          grid[i][j].treeTwo = forest[i][j].treeTwo;
          grid[i][j].treeThree = forest[i][j].treeThree;
          grid[i][j].grave = forest[i][j].grave;
          grid[i][j].goldOne = forest[i][j].goldOne;
          grid[i][j].toStreet = forest[i][j].toStreet;
        }
      }
      const yeah = action.roomTitle
      debugger

      return {
        ...state,
        grid: grid,
        playerPosition: keepTrackOfCurrentForestPosition,
        players: action.players
      };

    case type.MAKE_STREET_GRID:
        let allRooms = action.payload;

        // we have a big array with objects // split only the forest world out of it:
        let theResult = [];
  
        let streetI,
          streetJ,
          tempoStreetArray,
          streetChunk = 100;
  
        for (
          streetI = 0, streetJ = allRooms.length;
          streetI < streetJ;
          streetI += streetChunk
        ) {
          tempoStreetArray = allRooms.slice(streetI, streetI + streetChunk);
          theResult.push(tempoStreetArray);
        }
  
        allRooms = theResult[1];
        let streetGrid = [];
        let tempStreetArray = [];
        let keepTrackOfStreetIndex = 9;
  
        for (let i = 0; i < allRooms.length; i++) {
          if (keepTrackOfStreetIndex === i) {
            keepTrackOfStreetIndex += 10;
            tempStreetArray.push(allRooms[i]);
            streetGrid.push(tempStreetArray);
            tempStreetArray = [];
          } else {
            tempStreetArray.push(allRooms[i]);
          }
        }
  
        const street = createStreet([]);
  
        let keepTrackOfCurrentStreetPosition;
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            if (streetGrid[i][j].title === action.roomTitle) {
              streetGrid[i][j].start = true;
              keepTrackOfCurrentStreetPosition = streetGrid[i][j];
            } else {
              streetGrid[i][j].start = false;
            }
            streetGrid[i][j].i = street[i][j].i;
            streetGrid[i][j].j = street[i][j].j;
            streetGrid[i][j].neighbors = street[i][j].neighbors;
            streetGrid[i][j].skeleton = street[i][j].skeleton;
            streetGrid[i][j].goldStatue = street[i][j].goldStatue;
            streetGrid[i][j].toForest = street[i][j].toForest;
            streetGrid[i][j].darkTree = street[i][j].darkTree;
            streetGrid[i][j].goldOne = street[i][j].goldOne;
            streetGrid[i][j].grave = street[i][j].grave;
            

          }
        }
      return {
        ...state,
        grid: streetGrid,
        playerPosition: keepTrackOfCurrentStreetPosition,
        players: action.players
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
      let currentGrid = [...state.grid];

      let keepTrackOfCurrentPosition;
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (currentGrid[i][j].title === action.payload) {
            currentGrid[i][j].start = true;
            keepTrackOfCurrentPosition = currentGrid[i][j];
          } else {
            currentGrid[i][j].start = false;
          }
        }
      }

      return {
        ...state,
        grid: currentGrid,
       playerPosition: keepTrackOfCurrentPosition,
        players: action.players
      };

    default:
      return state;
  }
};

export default grid;
