const rows = 10;
const cols = 15;

const createHouse = (grid) => {
  for (let i = 0; i < rows; i++) {
    const currentRow = [];
    for (let j = 0; j < cols; j++) {
      currentRow.push(createNode(i, j));
    }
    grid.push(currentRow);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      addNeighbors(grid, i, j);
    }
  }

  return grid;
};

const createNode = (i, j) => {
  return {
    i: i,
    j: j,
    start: i === 0 && j === 0, // create start point
    //  end: end, // create end point
    neighbors: [],
    smallCabinet: i === 0 && j === 14,
    mediumCabinet: i === 9 && j === 3 || i === 9 && j === 9,
    bigCabinet: i === 0 && j === 6 || i === 0 && j === 7 || i === 0 && j === 8 || i === 0 && j === 9 || i === 0 && j === 10 || i === 0 && j === 11,
    chair: i === 5 && j === 7,
    carpet: i === 4 && j === 12 || i === 3 && j === 12 || i === 4 && j === 11 || i === 3 && j === 11 || i === 2 && j === 2 || i === 3 && j === 2 || i === 2 && j === 3 || i === 3 && j === 3 || i === 8 && j === 8 || i === 8 && j === 9 || i === 7 && j === 8 || i === 7 && j === 9,
    toGraveyard: i === 9 && j === 14
    // add other neccessary key value pairs for more functionality
  };
};

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

export default createHouse;
