import * as type from "../actions/gridActions";
import createForest from "../../components/Maps/Forest/ForestFunctions";
import createStreet from "../../components/Maps/Street/StreetFunctions";

const initialState = {
  grid: null,
  playerPosition: null,
  loading: null,
  error: null
};

const rows = 10;
const cols = 10;


const grid = (state = initialState, action) => {
  switch (action.type) {
    case type.MAKE_FOREST_GRID:
      let rooms = action.payload;

      // we have a big array with objects // split only the forest world out of it:
      let result = [];

    let i,j,tempoArray,chunk = 100;
    
    for (i=0,j=rooms.length; i<j; i+=chunk) {
    tempoArray = rooms.slice(i,i+chunk);
    result.push(tempoArray)
   }

      rooms = result[0];
      debugger
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
          grid[i][j].toStreet = forest[i][j].toStreet;
          grid[i][j].toHouse = forest[i][j].toHouse;
        }
      }

      return {
        ...state,
        grid: grid,
        playerPosition: grid[0][0]
      };

    case type.MAKE_STREET_GRID:
        let allRooms = action.payload;

        // we have a big array with objects // split only the forest world out of it:
        let theResult = [];
  
      let streetI,streetJ,tempoStreetArray,streetChunk = 100;
      
      for (streetI=0,streetJ=allRooms.length; streetI<streetJ; streetI+=streetChunk) {
      tempoStreetArray = allRooms.slice(streetI,streetI+streetChunk);
      theResult.push(tempoStreetArray)
     }
  
        allRooms = theResult[1];
        debugger
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
        
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            streetGrid[i][j].i = street[i][j].i;
            streetGrid[i][j].j = street[i][j].j;
            streetGrid[i][j].start = street[i][j].start;
            streetGrid[i][j].neighbors = street[i][j].neighbors;
            streetGrid[i][j].skeleton = street[i][j].skeleton;
            streetGrid[i][j].goldStatue = street[i][j].goldStatue;
            streetGrid[i][j].toForest = street[i][j].toForest;
          }
        }
  
        return {
          ...state,
          grid: streetGrid,
          playerPosition: streetGrid[0][0]
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
