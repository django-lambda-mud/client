import React from "react";
import styled from "styled-components";
import grass from "./images/grass.png";
import wood from "./images/wood.png";
import street from "./images/street.png";
import { connect } from "react-redux";
import Node from "../Node/Node";
import {
  makeStreetGrid,
  makeForestGrid,
  makeHouseGrid,
  makeGraveyardGrid,
  moveThePlayer
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

  .node-child {
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: 0 0;
  }
`;

class MainGame extends React.Component {
  componentDidMount = () => {
    this.createForest("startOfGame");

    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  };

  handleKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        // down
        if (this.props.playerPosition.i + 1 !== rows) {
          const positionDown = this.props.grid[this.props.playerPosition.i + 1][
            this.props.playerPosition.j
          ];
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
            this.props.playerPosition.s_to !== 0
             &&
            !positionDown.treeOne &&
            !positionDown.treeTwo &&
            !positionDown.treeThree
          ) {
            const newGrid = this.movePlayer(
              this.props.grid,
              this.props.playerPosition.i + 1,
              this.props.playerPosition.j
            );
            this.props.moveThePlayer(newGrid, positionDown, "s");
          }
          return;
        }
        return;
      case 37:
        // left
        if (this.props.playerPosition.j !== 0) {
          const positionLeft = this.props.grid[this.props.playerPosition.i][
            this.props.playerPosition.j - 1
          ];
          if (positionLeft.toForest) {
            this.createForest();
          }
          if (
            this.props.playerPosition.w_to !== 0 && // .neighbors.includes(positionLeft) was old code
            !positionLeft.treeOne &&
            !positionLeft.treeTwo &&
            !positionLeft.treeThree
          ) {
            const newGrid = this.movePlayer(
              this.props.grid,
              this.props.playerPosition.i,
              this.props.playerPosition.j - 1
            );
            this.props.moveThePlayer(newGrid, positionLeft, "w");
          }
          return;
        }
        return;
      case 39:
        // right
        if (this.props.playerPosition.j + 1 !== cols) {
          const positionRight = this.props.grid[this.props.playerPosition.i][
            this.props.playerPosition.j + 1
          ];
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
            this.props.playerPosition.e_to !== 0 &&
            !positionRight.treeOne &&
            !positionRight.treeTwo &&
            !positionRight.treeThree
          ) {
            const newGrid = this.movePlayer(
              this.props.grid,
              this.props.playerPosition.i,
              this.props.playerPosition.j + 1
            );
            this.props.moveThePlayer(newGrid, positionRight, "e");
          }
          return;
        }
        return;
      case 38:
        // up
        if (this.props.playerPosition.i !== 0) {
          const positionUp = this.props.grid[this.props.playerPosition.i - 1][
            this.props.playerPosition.j
          ];
          if (positionUp.toStreet) {
            this.createStreet();
          }
          if (
            this.props.playerPosition.n_to !== 0 &&
            !positionUp.treeOne &&
            !positionUp.treeTwo &&
            !positionUp.treeThree
          ) {
            const newGrid = this.movePlayer(
              this.props.grid,
              this.props.playerPosition.i - 1,
              this.props.playerPosition.j
            );
            this.props.moveThePlayer(newGrid, positionUp, "n");
          }
          return;
        }
        return;
      default:
        return;
    }
  };

  createForest = () => {
    this.props.makeForestGrid();
    document.querySelector(".grid").style.backgroundImage = `url(${grass})`;
  };

  createStreet = () => {
    this.props.makeStreetGrid();
    document.querySelector(".grid").style.backgroundImage = `url(${street})`;
  };

  createHouse = () => {
    this.props.makeHouseGrid();
    document.querySelector(".grid").style.backgroundImage = `url(${wood})`;
  };

  createGraveyard = () => {
    this.props.makeGraveyardGrid();
    document.querySelector(".grid").style.backgroundImage = `url(${grass})`;
  };

  movePlayer = (grid, i, j) => {
    grid[this.props.playerPosition.i][
      this.props.playerPosition.j
    ].start = false;
    grid[i][j].start = true;
    return grid;
  };

  render() {
    if (this.props.grid) {
      console.log(this.props.grid);
    }
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
    playerPosition: state.grid.playerPosition,
    character: state.character.character
  };
};

export default connect(
  mapStateToProps,
  {
    makeForestGrid,
    makeStreetGrid,
    makeHouseGrid,
    makeGraveyardGrid,
    moveThePlayer
  }
)(MainGame);

const rows = 10;
const cols = 10;
