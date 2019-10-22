const rows = 10;
const cols = 15;

const createGraveyard = grid => {
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
    fence:
      (i === 1 && j === 14) ||
      (i === 1 && j === 15) ||
      (i === 1 && j === 7) ||
      (i === 1 && j === 8) ||
      (i === 1 && j === 9) ||
      (i === 1 && j === 10) ||
      (i === 1 && j === 11) ||
      (i === 1 && j === 12) ||
      (i === 1 && j === 13),
    darkTree:
      (i === 9 && j === 0) ||
      (i === 9 && j === 1) ||
      (i === 9 && j === 2) ||
      (i === 9 && j === 3) ||
      (i === 9 && j === 4) ||
      (i === 9 && j === 5) ||
      (i === 9 && j === 6) ||
      (i === 9 && j === 7) ||
      (i === 9 && j === 8) ||
      (i === 9 && j === 9) ||
      (i === 9 && j === 10) ||
      (i === 9 && j === 11) ||
      (i === 9 && j === 13) ||
      (i === 9 && j === 14) ||
      (i === 8 && j === 0) ||
      (i === 8 && j === 1) ||
      (i === 8 && j === 3) ||
      (i === 7 && j === 0) ||
      (i === 7 && j === 1) ||
      (i === 6 && j === 0),
      exitStreet: i === 9 && j === 12
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

export default createGraveyard;
