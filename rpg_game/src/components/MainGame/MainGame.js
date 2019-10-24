import React from "react";
import styled from "styled-components";
import img from "./images/atmosphere-blue-clouds-2531709.jpg";
import wood from "./images/wood.png";
import street from "./images/street.png";
import createForest from "../Maps/Forest/ForestFunctions";
import createStreet from "../Maps/Street/StreetFunctions";
import createHouse from "../Maps/House/HouseFunctions";
import createGraveyard from "../Maps/Graveyard/GraveyardFunctions";
import { connect } from "react-redux";
import Pusher from 'pusher-js';
import Node from "../Node/Node";
import {
  makeStreetGrid,
  makeForestGrid,
  makeHouseGrid,
  makeGraveyardGrid,
  moveThePlayer,
  sendMessage
} from "../../store/actions/gridActions";
import characterOne from "../Node/images/character_one.png";
import characterTwo from "../Node/images/character_two.png";
import characterThree from "../Node/images/character_three.png";
import characterFour from "../Node/images/character_four.png";
import characterFive from "../Node/images/character_five.png";

// eslint-disable-next-line
let playerPosition;

const pusher = new Pusher('f2df1cd773bc785afe1e', {
  cluster: 'eu',
  forceTLS: true,
  encrypted: true
});

class MainGame extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      chats: [],
      currentRoom: null
    }
  }

  componentWillMount = () => {
    this.createForest();
  }

  componentDidMount = () => {
    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  };

  componentWillUnmount = () => {
    pusher.unsubscribe('mudroom-'+this.props.currentRoom.title)
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.currentRoom !== this.props.currentRoom) {
      this.setState({ currentRoom: this.props.currentRoom })
      const channel = pusher.subscribe('mudroom-'+this.props.currentRoom.title);
      channel.bind('message', data => {
        this.setState({ chats: [...this.state.chats, data] })
      });
    }
  }

  handleTextChange = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const payload = {
        room: this.props.currentRoom.title,
        username: this.props.currentRoom.name,
        message: this.state.text
      };
      this.setState({ text: '' })
      this.props.sendMessage(payload)
    } else {
      this.setState({ text: e.target.value });
    }
  }



  handleKeyDown = e => {
    switch (e.keyCode) {
      case 40:
        // down
        if (this.props.playerPosition.i + 1 !== rows) {
          const positionDown = this.props.grid[this.props.playerPosition.i + 1][
            this.props.playerPosition.j
          ];
          // if (positionDown.toForest) {
          //   this.createForest();
          // }
          // if (positionDown.toHouse) {
          //   this.createHouse();
          // }
          // if (positionDown.toGraveyard) {
          //   this.createGraveyard();
          // }
          // if (positionDown.exitStreet) {
          //   this.createStreet();
          // }
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
          // if (positionLeft.toForest) {
          //   this.createForest();
          // }
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
          // if (positionRight.toForest) {
          //   this.createForest();
          // }
          // if (positionRight.toStreet) {
          //   this.createStreet();
          // }
          // if (positionRight.toGraveyard) {
          //   this.createGraveyard();
          // }
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
          // if (positionUp.toStreet) {
          //   this.createStreet();
          // }
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
    document.querySelector(".grid").style.backgroundImage = `url(${img})`;
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
      // console.log(this.props.grid);
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
        <div className="game-info">
              <div className="room-info">
                <p>Room {this.props.currentRoom ? this.props.currentRoom.title: ''}</p>
                <h5><u>Roommates</u></h5>
                <ul>
                {this.props.currentRoom ? this.props.currentRoom.players.map((player, index) => {
                  return <li key={index}>{player}</li>
                }) : ''}
                </ul>
              </div>
              <div className="chat-space">
                <div className="message-view">
                  {this.state.chats ? this.state.chats.map((chat, index) => {
                    return <div key={index}><span>{chat.username}:</span> <span>{chat.message}</span></div>
                  }): ''}
                </div>
                <div className="input-field">
                  <form>
                    <input placeholder="chat with roomates" value={this.state.text} onChange={this.handleTextChange} onKeyDown={this.handleTextChange}/>
                  </form>
                </div>
              </div>
        </div>
      </StyledMainGame>
    );
  }
}

const StyledMainGame = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: space-around;

  .grid {
    border: 5px solid #01134c;
    margin: 20px;
    width: 70%;
    box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 2.06);
  }

  .game-info {
    width: 20%;
    display: flex;
    flex-direction: column;

    .room-info {
      padding: 10px;
      border: 2px solid #01134c;
      width: 100%;
      min-height: 250px;
      height: auto;
      margin-bottom: 30px;
      box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 2.06);

      h5 {
        margin-top: 30px;
        color: #fff;
        font-size: 20px;
      }

      li {
        margin-top: 10px;
        color: #fff;
        font-size: 13px;
      }
    }

    .chat-space {
      border: 2px solid #01134c;
      width: 100%;
      min-height: 250px;
      height: auto;
      box-shadow: 0px 1.87781px 6.25935px rgba(0, 0, 0, 2.06);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px;

      .message-view {
        border: 1px solid white;
        background: #fff;
        flex: 1
        padding: 10px;

        span {
          color: black;
          font-size: 12px;
        }
      }

      .input-field {
        margin-top: 20px;
        input {
          padding: 5px;
          width: 100%;
          border: none;

          ::placeholder {
            color: #111
          }
        }
      }
    }
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


const mapStateToProps = state => {
  return {
    grid: state.grid.grid,
    playerPosition: state.grid.playerPosition,
    character: state.character.character,
    currentRoom: state.grid.currentRoom
  };
};

export default connect(
  mapStateToProps,
  {
    makeForestGrid,
    makeStreetGrid,
    makeHouseGrid,
    makeGraveyardGrid,
    moveThePlayer,
    sendMessage
  }
)(MainGame);

const rows = 10;
const cols = 10;
let grid;
