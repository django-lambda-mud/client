import React from "react";
import styled from "styled-components";
import grass from "./images/grass.png";
import wood from "./images/wood.png";
import street from "./images/street.png";
import createForest from "../Maps/Forest/ForestFunctions";
import createStreet from "../Maps/Street/StreetFunctions";
import createHouse from "../Maps/House/HouseFunctions";
import createGraveyard from "../Maps/Graveyard/GraveyardFunctions";
import { connect } from "react-redux";
import Node from "../Node/Node";
import {
  makeStreetGrid,
  makeForestGrid,
  makeHouseGrid,
  makeGraveyardGrid,
} from "../../store/actions/gridActions";
import characterOne from "../Node/images/character_one.png";
import characterTwo from "../Node/images/character_two.png";
import characterThree from "../Node/images/character_three.png";
import characterFour from "../Node/images/character_four.png";
import characterFive from "../Node/images/character_five.png";

const StyledMainGame = styled.div`
  display: flex;

  .grid {
    background-image: url(${grass});
  }

  .node {
    width: 4rem;
    height: 4rem;
  }
`;

class MainGame extends React.Component {
  componentDidMount = () => {
    this.createForest([]);

    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        // down
        if (playerPosition.i + 1 !== rows) {
          const positionDown = grid[playerPosition.i + 1][playerPosition.j];
          if (positionDown.toForest) {
            this.createForest();
          }
          if (positionDown.toHouse) {
            this.createHouse();
          }
          if (positionDown.toGraveyard) {
            this.createGraveyard();
          }
          if (positionDown.exitStreet) {
            this.createStreet();
          }
          if (
            playerPosition.neighbors.includes(positionDown) &&
            !positionDown.treeOne &&
            !positionDown.treeTwo &&
            !positionDown.treeThree
          ) {
            const newGrid = movePlayer(
              this.props.grid,
              playerPosition.i + 1,
              playerPosition.j
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      case 37:
        // left
        if (playerPosition.j !== 0) {
          const positionLeft = grid[playerPosition.i][playerPosition.j - 1];
          if (positionLeft.toForest) {
            this.createForest();
          }
          if (
            playerPosition.neighbors.includes(positionLeft) &&
            !positionLeft.treeOne &&
            !positionLeft.treeTwo &&
            !positionLeft.treeThree
          ) {
            const newGrid = movePlayer(
              this.props.grid,
              playerPosition.i,
              playerPosition.j - 1
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      case 39:
        // right
        if (playerPosition.j + 1 !== cols) {
          const positionRight = grid[playerPosition.i][playerPosition.j + 1];
          if (positionRight.toForest) {
            this.createForest();
          }
          if (positionRight.toStreet) {
            this.createStreet();
          }
          if (positionRight.toGraveyard) {
            this.createGraveyard();
          }
          if (
            playerPosition.neighbors.includes(positionRight) &&
            !positionRight.treeOne &&
            !positionRight.treeTwo &&
            !positionRight.treeThree
          ) {
            const newGrid = movePlayer(
              this.props.grid,
              playerPosition.i,
              playerPosition.j + 1
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      case 38:
        // up
        if (playerPosition.i !== 0) {
          const positionUp = grid[playerPosition.i - 1][playerPosition.j];
          if (positionUp.toStreet) {
            this.createStreet();
          }
          if (
            playerPosition.neighbors.includes(positionUp) &&
            !positionUp.treeOne &&
            !positionUp.treeTwo &&
            !positionUp.treeThree
          ) {
            const newGrid = movePlayer(
              this.props.grid,
              playerPosition.i - 1,
              playerPosition.j
            );
            this.setState({
              grid: newGrid
            });
          }
          return;
        }
        return;
      default:
        return;
    }
  };

  createForest = () => {
    const forestGrid = createForest([]);
    this.props.makeForestGrid(forestGrid);
    grid = forestGrid;
    playerPosition = grid[0][0];
    document.querySelector(".grid").style.backgroundImage = `url(${grass})`;
  };

  createStreet = () => {
    const streetGrid = createStreet([]);
    this.props.makeStreetGrid(streetGrid);
    grid = streetGrid;
    playerPosition = grid[0][0];
    document.querySelector(".grid").style.backgroundImage = `url(${street})`;
  };

  createHouse = () => {
    const houseGrid = createHouse([]);
    this.props.makeHouseGrid(houseGrid);
    grid = houseGrid;
    playerPosition = grid[0][0];
    document.querySelector(".grid").style.backgroundImage = `url(${wood})`;
  };

  createGraveyard = () => {
    const graveyardGrid = createGraveyard([]);
    this.props.makeGraveyardGrid(graveyardGrid);
    grid = graveyardGrid;
    playerPosition = grid[0][0];
    document.querySelector(".grid").style.backgroundImage = `url(${grass})`;
  };

  render() {
    console.log(this.props.grid);
    return (
      <StyledMainGame>
        <table className="grid">
          <tbody>
            {this.props.grid
              ? this.props.grid.map((item, i) => {
                  let entry = item.map((element, j) => {
                    return (
                      <Node
                        key={j}
                        i={element.i}
                        j={element.j}
                        start={element.start}
                        // FOREST
                        treeOne={element.treeOne}
                        treeTwo={element.treeTwo}
                        treeThree={element.treeThree}
                        goldOne={element.goldOne}
                        grave={element.grave}
                        toStreet={element.toStreet}
                        toHouse={element.toHouse}
                        // STREET
                        goldStatue={element.goldStatue}
                        skeleton={element.skeleton}
                        toForest={element.toForest}
                        // HOUSE
                        carpet={element.carpet}
                        smallCabinet={element.smallCabinet}
                        mediumCabinet={element.mediumCabinet}
                        bigCabinet={element.bigCabinet}
                        chair={element.chair}
                        toGraveyard={element.toGraveyard}
                        // GRAVEYARD
                        fence={element.fence}
                        darkTree={element.darkTree}
                        exitStreet={element.exitStreet}
                        // Character
                        character={
                          this.props.character === "characterOne"
                            ? characterOne
                            : this.props.character === "characterTwo"
                            ? characterTwo
                            : this.props.character === "characterThree"
                            ? characterThree
                            : this.props.character === "characterFour"
                            ? characterFour
                            : characterFive
                        }
                      />
                    );
                  });
                  return <tr key={i}>{entry}</tr>;
                })
              : null}
          </tbody>
        </table>
      </StyledMainGame>
    );
  }
}

const mapStateToProps = state => {
  return {
    grid: state.grid.grid,
    character: state.character.character
  };
};

export default connect(
  mapStateToProps,
  { makeForestGrid, makeStreetGrid, makeHouseGrid, makeGraveyardGrid }
)(MainGame);

const rows = 10;
const cols = 15;
let playerPosition;
let grid;

const movePlayer = (grid, i, j) => {
  grid[playerPosition.i][playerPosition.j].start = false;
  playerPosition = grid[i][j];
  grid[i][j].start = true;
  return grid;
};
