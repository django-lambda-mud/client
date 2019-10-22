import React from "react";

// FOREST
import tree1 from "./images/tree_one.png";
import tree2 from "./images/tree_two.png";
import tree3 from "./images/tree_three.png";
import grave1 from "./images/grave.png";
import gold1 from "./images/gold_one.png";
import exitTheStreet from "./images/toStreet.png";
import doorOne from "./images/door.png";
// STREET
import goldStatueOne from "./images/goldStatue.png";
import skeletonOne from "./images/skeleton.png";
import exitForest from "./images/toForest.png";
// HOUSE
import chairOne from "./images/chair.png";
import carpetOne from "./images/carpet.png";
import cabinetOne from "./images/small_cabinet.png";
import cabinetTwo from "./images/medium_cabinet.png";
import cabinetThree from "./images/big_cabinet.png";
import exitGraveyard from "./images/toGraveyard.png";
// GRAVEYARD
import fenceOne from "./images/fence.png";
import tree4 from "./images/darkTree.png";
import exitToStreet from "./images/exitStreet.png";

class Node extends React.Component {
  render() {
    const {
      i,
      j,
      start,
      treeOne,
      treeTwo,
      treeThree,
      grave,
      goldOne,
      toStreet,
      goldStatue,
      skeleton,
      toForest,
      character,
      toHouse,
      carpet,
      chair,
      smallCabinet,
      mediumCabinet,
      bigCabinet,
      toGraveyard,
      fence,
      darkTree,
      exitStreet
    } = this.props;

    return (
      <td className="node" id={`${i} ${j}`}>
        {start ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${character}')`,
              width: `45px`,
              height: `49px`
            }}
          />
        ) : // FOR FOREST
        treeOne ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${tree1}')`,
              width: `60px`,
              height: `50px`
            }}
          />
        ) : treeTwo ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${tree2}')`,
              width: `60px`,
              height: `50px`
            }}
          />
        ) : treeThree ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${tree3}')`,
              width: `60px`,
              height: `50px`
            }}
          />
        ) : grave ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${grave1}')`,
              width: `35px`,
              height: `40px`
            }}
          />
        ) : goldOne ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${gold1}')`,
              width: `70px`,
              height: `63px`
            }}
          />
        ) : toStreet ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${exitTheStreet}')`,
              width: `90px`,
              height: `90px`
            }}
          />
        ) : toHouse ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${doorOne}')`,
              width: `36px`,
              height: `55px`
            }}
          />
        ) : // FOR STREET
        goldStatue ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${goldStatueOne}')`,
              width: `40px`,
              height: `65px`
            }}
          />
        ) : skeleton ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${skeletonOne}')`,
              width: `60px`,
              height: `35px`
            }}
          />
        ) : toForest ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${exitForest}')`,
              width: `35px`,
              height: `40px`
            }}
          />
        ) : // FOR HOUSE
        carpet ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${carpetOne}')`,
              width: `30px`,
              height: `40px`
            }}
          />
        ) : chair ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${chairOne}')`,
              width: `28px`,
              height: `40px`
            }}
          />
        ) : smallCabinet ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${cabinetOne}')`,
              width: `40px`,
              height: `40px`
            }}
          />
        ) : mediumCabinet ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${cabinetTwo}')`,
              width: `40px`,
              height: `65px`
            }}
          />
        ) : bigCabinet ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${cabinetThree}')`,
              width: `95px`,
              height: `95px`
            }}
          />
        ) :  toGraveyard ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${exitGraveyard}')`,
              width: `180px`,
              height: `165px`
            }}
          />
        ) : // GRAVEYARD
        fence ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${fenceOne}')`,
              width: `100px`,
              height: `50px`
            }}
          />
        ) : darkTree ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${tree4}')`,
              width: `50px`,
              height: `100px`
            }}
          />
        ) : exitStreet ? (
          <div
          className="node-child"  
          style={{              
              backgroundImage: `url('${exitToStreet}')`,
              width: `48px`,
              height: `100px`
            }}
          />
        ) : (
          <div
          className="node-child"  
          style={{              
              width: `40px`,
              height: `40px`
            }}
          />
        )}
      </td>
    );
  }
}

export default Node;
