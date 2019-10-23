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


// const rooms = {
//   "rooms": [
//       {
//           "id": 1,
//           "title": "Outside Cave Entrance",
//           "description": "North of you, the cave mount beckons",
//           "n_to": 2,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 2,
//           "title": "Foyer",
//           "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
//           "n_to": 3,
//           "s_to": 1,
//           "e_to": 4,
//           "w_to": 0
//       },
//       {
//           "id": 3,
//           "title": "Grand Overlook",
//           "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
//           "n_to": 0,
//           "s_to": 2,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 4,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 5,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       } ,{
//           "id": 6,
//           "title": "Outside Cave Entrance",
//           "description": "North of you, the cave mount beckons",
//           "n_to": 2,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 7,
//           "title": "Foyer",
//           "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
//           "n_to": 3,
//           "s_to": 1,
//           "e_to": 4,
//           "w_to": 0
//       },
//       {
//           "id": 8,
//           "title": "Grand Overlook",
//           "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
//           "n_to": 0,
//           "s_to": 2,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 9,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 10,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       },{
//           "id": 11,
//           "title": "Outside Cave Entrance",
//           "description": "North of you, the cave mount beckons",
//           "n_to": 2,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 12,
//           "title": "Foyer",
//           "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
//           "n_to": 3,
//           "s_to": 1,
//           "e_to": 4,
//           "w_to": 0
//       },
//       {
//           "id": 13,
//           "title": "Grand Overlook",
//           "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
//           "n_to": 0,
//           "s_to": 2,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 14,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 15,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       } ,{
//           "id": 16,
//           "title": "Outside Cave Entrance",
//           "description": "North of you, the cave mount beckons",
//           "n_to": 2,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 17,
//           "title": "Foyer",
//           "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
//           "n_to": 3,
//           "s_to": 1,
//           "e_to": 4,
//           "w_to": 0
//       },
//       {
//           "id": 18,
//           "title": "Grand Overlook",
//           "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
//           "n_to": 0,
//           "s_to": 2,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 4,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 19,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       },{
//           "id": 20,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 21,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       },{
//           "id": 22,
//           "title": "Outside Cave Entrance",
//           "description": "North of you, the cave mount beckons",
//           "n_to": 2,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 23,
//           "title": "Foyer",
//           "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
//           "n_to": 3,
//           "s_to": 1,
//           "e_to": 4,
//           "w_to": 0
//       },
//       {
//           "id": 24,
//           "title": "Grand Overlook",
//           "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
//           "n_to": 0,
//           "s_to": 2,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 25,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 26,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       } ,{
//           "id": 27,
//           "title": "Outside Cave Entrance",
//           "description": "North of you, the cave mount beckons",
//           "n_to": 2,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 28,
//           "title": "Foyer",
//           "description": "Dim light filters in from the south. Dusty\npassages run north and east.",
//           "n_to": 3,
//           "s_to": 1,
//           "e_to": 4,
//           "w_to": 0
//       },
//       {
//           "id": 29,
//           "title": "Grand Overlook",
//           "description": "A steep cliff appears before you, falling\ninto the darkness. Ahead to the north, a light flickers in\nthe distance, but there is no way across the chasm.",
//           "n_to": 0,
//           "s_to": 2,
//           "e_to": 0,
//           "w_to": 0
//       },
//       {
//           "id": 30,
//           "title": "Narrow Passage",
//           "description": "The narrow passage bends here from west\nto north. The smell of gold permeates the air.",
//           "n_to": 5,
//           "s_to": 0,
//           "e_to": 0,
//           "w_to": 2
//       },
//       {
//           "id": 19,
//           "title": "Treasure Chamber",
//           "description": "You've found the long-lost treasure\nchamber! Sadly, it has already been completely emptied by\nearlier adventurers. The only exit is to the south.",
//           "n_to": 0,
//           "s_to": 4,
//           "e_to": 0,
//           "w_to": 0
//       },
//   ]
// };


// console.log(result)


