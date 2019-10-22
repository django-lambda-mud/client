import React from "react";

// FOREST
import tree1 from "./images/tree_one.png";
import tree2 from "./images/tree_two.png";
import tree3 from "./images/tree_three.png";
import grave1 from "./images/grave.png";
import gold1 from "./images/gold_one.png";
import exitStreet from "./images/toStreet.png";
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
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${character}')`,
              backgroundPosition: "0 0",
              width: `45px`,
              height: `49px`
            }}
          />
        ) : // FOR FOREST
        treeOne ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree1}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`
            }}
          />
        ) : treeTwo ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree2}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`
            }}
          />
        ) : treeThree ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree3}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`
            }}
          />
        ) : grave ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${grave1}')`,
              backgroundPosition: "0 0",
              width: `35px`,
              height: `40px`
            }}
          />
        ) : goldOne ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${gold1}')`,
              backgroundPosition: "0 0",
              width: `70px`,
              height: `63px`
            }}
          />
        ) : toStreet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${exitStreet}')`,
              backgroundPosition: "0 0",
              width: `90px`,
              height: `90px`
            }}
          />
        ) : toHouse ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${doorOne}')`,
              backgroundPosition: "0 0",
              width: `36px`,
              height: `55px`
            }}
          />
        ) : // FOR STREET
        goldStatue ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${goldStatueOne}')`,
              backgroundPosition: "0 0",
              width: `40px`,
              height: `65px`
            }}
          />
        ) : skeleton ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${skeletonOne}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `35px`
            }}
          />
        ) : toForest ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${exitForest}')`,
              backgroundPosition: "0 0",
              width: `35px`,
              height: `40px`
            }}
          />
        ) : // FOR HOUSE
        carpet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${carpetOne}')`,
              backgroundPosition: "0 0",
              width: `30px`,
              height: `40px`
            }}
          />
        ) : chair ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${chairOne}')`,
              backgroundPosition: "0 0",
              width: `28px`,
              height: `40px`
            }}
          />
        ) : smallCabinet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${cabinetOne}')`,
              backgroundPosition: "0 0",
              width: `40px`,
              height: `40px`
            }}
          />
        ) : mediumCabinet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${cabinetTwo}')`,
              backgroundPosition: "0 0",
              width: `40px`,
              height: `65px`
            }}
          />
        ) : bigCabinet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${cabinetThree}')`,
              backgroundPosition: "0 0",
              width: `95px`,
              height: `95px`
            }}
          />
        ) :  toGraveyard ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${exitGraveyard}')`,
              backgroundPosition: "0 0",
              width: `180px`,
              height: `165px`
            }}
          />
        ) : // GRAVEYARD
        fence ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${fenceOne}')`,
              backgroundPosition: "0 0",
              width: `100px`,
              height: `50px`
            }}
          />
        ) : darkTree ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree4}')`,
              backgroundPosition: "0 0",
              width: `50px`,
              height: `100px`
            }}
          />
        ) : exitStreet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${exitToStreet}')`,
              backgroundPosition: "0 0",
              width: `48px`,
              height: `100px`
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
