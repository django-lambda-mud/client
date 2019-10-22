import React from 'react';
import characterOne from "../../Node/images/character_one.png";
import characterTwo from "../../Node/images/character_two.png";
import characterThree from "../../Node/images/character_three.png";
import characterFour from "../../Node/images/character_four.png";
import characterFive from "../../Node/images/character_five.png";
import styled from "styled-components";
import { connect } from "react-redux";
import { chooseCharacter } from "../../../store/actions/characterActions";

const StyledCharacter = styled.div`

`;

class Character extends React.Component {

  render() { 
    return ( 
      <StyledCharacter>
        <h1>Choose your character to begin a session</h1>
        <img src={characterOne} alt="character one" onClick={(() => this.props.chooseCharacter("characterOne", this.props.history))}/>
        <img src={characterTwo} alt="character two" onClick={(() => this.props.chooseCharacter("characterTwo", this.props.history))}/>        
        <img src={characterThree} alt="character three" onClick={(() => this.props.chooseCharacter("characterThree", this.props.history))}/>
        <img src={characterFour} alt="character four" onClick={(() => this.props.chooseCharacter("characterFour", this.props.history))}/>        
        <img src={characterFive} alt="character five" onClick={(() => this.props.chooseCharacter("characterFive", this.props.history))}/>
      </StyledCharacter>
     );
  }
}
 
const mapStateToProps = state => {
  return {
    grid: state.character.character
  };
};

export default connect(mapStateToProps, {chooseCharacter })(Character);
