const rows = 10;
const cols = 10;

const createStreet = grid => {
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
    neighbors: [],
    goldStatue:
      (i === 3 && j === 9) || (i === 1 && j === 2) || (i === 9 && j === 0),
    skeleton: (i === 5 && j === 7) || (i === 9 && j === 7),
    darkTree:
      (i === 0 && j === 1) ||
      (i === 1 && j === 1) ||
      (i === 2 && j === 1) ||
      (i === 2 && j === 2) ||
      (i === 2 && j === 3) ||
      (i === 4 && j === 1) ||
      (i === 5 && j === 1) ||
      (i === 6 && j === 1) ||
      (i === 7 && j === 1) ||
      (i === 9 && j === 1) ||
      (i === 9 && j === 2) ||
      (i === 9 && j === 3) ||
      (i === 9 && j === 4) ||
      (i === 9 && j === 5) ||
      (i === 4 && j === 2) ||
      (i === 2 && j === 4) ||
      (i === 2 && j === 6) ||
      (i === 2 && j === 7) ||
      (i === 2 && j === 8) ||
      (i === 2 && j === 9) ||
      (i === 4 && j === 3) ||
      (i === 4 && j === 4) ||
      (i === 4 && j === 6) ||
      (i === 4 && j === 7) ||
      (i === 4 && j === 8) ||
      (i === 4 && j === 9) ||
      (i === 1 && j === 6) ||
      (i === 1 && j === 4) ||
      (i === 5 && j === 4) ||
      (i === 6 && j === 4) ||
      (i === 5 && j === 6) ||
      (i === 6 && j === 6) 
      ,
     grave: (i === 0 && j === 9),
     goldOne: (i === 1 && j === 2),
    toForest: i === 9 && j === 8
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

export default createStreet;
