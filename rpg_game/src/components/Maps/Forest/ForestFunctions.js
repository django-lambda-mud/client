const rows = 10;
const cols = 15;

const createForest = (grid) => {
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
    treeOne:
      (i === 0 && j === 2) ||
      (i === 0 && j === 3) ||
      (i === 0 && j === 4) ||
      (i === 1 && j === 2) ||
      (i === 2 && j === 2) ||
      (i === 1 && j === 4) ||
      (i === 2 && j === 4) ||
      (i === 0 && j === 5) ||
      (i === 0 && j === 6) ||
      (i === 2 && j === 5),
    treeTwo:
      (i === 5 && j === 10) || (i === 5 && j === 11) || (i === 5 && j === 12),
    treeThree:
      (i === 8 && j === 0) ||
      (i === 9 && j === 0) ||
      (i === 9 && j === 1) ||
      (i === 9 && j === 2) ||
      (i === 9 && j === 4) ||
      (i === 9 && j === 5) ||
      (i === 9 && j === 6) ||
      (i === 9 && j === 7) ||
      (i === 9 && j === 8) ||
      (i === 9 && j === 9) ||
      (i === 9 && j === 10) ||
      (i === 9 && j === 11) ||
      (i === 9 && j === 12) ||
      (i === 9 && j === 13) ||
      (i === 9 && j === 14),
    grave: i === 0 && j === 8,
    goldOne: i === 0 && j === 9,
    toStreet: i === 0 && j === 14,
    toHouse: i === 9 && j === 3
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

export default createForest;
