import React from 'react';
import characterOne from "../../Node/images/character_one.png";
import characterTwo from "../../Node/images/character_two.png";
import characterThree from "../../Node/images/character_three.png";
import characterFour from "../../Node/images/character_four.png";
import characterFive from "../../Node/images/character_five.png";
import styled from "styled-components";
import { connect } from "react-redux";
import { chooseCharacter } from "../../../store/actions/characterActions";
import { withRouter } from "react-router-dom";
import img from '../../../assets/clouds-dark-lightning-1118869.jpg'

const StyledCharacter = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fdf5b7;

  .title {
    margin-bottom: 20px;
  }

  .actors {
    img {
      width: 20%;
      height: 10%;
      cursor: pointer;
    }
  }

  
`;

class Character extends React.Component {

  render() { 
    return ( 
      <StyledCharacter>
        <div className="title">
          <h1>Choose your character to begin a session</h1>
        </div>
        <div className="actors">
          <img src={characterOne} alt="character one" onClick={(() => this.props.chooseCharacter("characterOne", this.props.history))}/>
          <img src={characterTwo} alt="character two" onClick={(() => this.props.chooseCharacter("characterTwo", this.props.history))}/>        
          <img src={characterThree} alt="character three" onClick={(() => this.props.chooseCharacter("characterThree", this.props.history))}/>
          <img src={characterFour} alt="character four" onClick={(() => this.props.chooseCharacter("characterFour", this.props.history))}/>        
          <img src={characterFive} alt="character five" onClick={(() => this.props.chooseCharacter("characterFive", this.props.history))}/>
        </div>
      </StyledCharacter>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    grid: state.character.character
  };
};

export default withRouter(connect(mapStateToProps, {chooseCharacter })(Character));
