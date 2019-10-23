import React from "react";
import { connect } from "react-redux";
import { doSignUp } from "../../store/actions/authenticationActions";

import img from '../../assets/clouds-dark-lightning-1118869.jpg'
import logo from '../../assets/M.svg'
import styled from 'styled-components'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      password2: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = () => {
    if (this.state.username && this.state.password1 && this.state.password2) {
      const credentials = {
        username: this.state.username,
        password1: this.state.password1,
        password2: this.state.password2
      };

      this.props.doSignUp(credentials, this.props.history);

      this.setState({
        password1: null,
        password2: null,
        username: null
      });
    }
  };

  render() {
    return (
      <RegisterWrapper>
        <div className="register">
          
          <div className="inputs">
            <img src={logo} alt="logo"></img>
            <input
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="Username.."
              type="text"
            />
            <input
              name="password1"
              type="password"
              onChange={this.handleChange}
              value={this.state.password1}
              placeholder="Password.."
            />
            <input
              name="password2"
              type="password"
              onChange={this.handleChange}
              value={this.state.password2}
              placeholder="Verify Password"
            />
            <button onClick={this.register}>Get Started</button>
          </div>
        </div>
      </RegisterWrapper>
    );
  }
}

const RegisterWrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;

  .register {
    img {
      margin: auto;
      width: 7%;
      margin-bottom: 50px;
    }
    .inputs {
      display: flex;
      flex-direction: column;
      // align-items: center;
      margin: 20% auto;
      width: 50%;
      color: white;

      input {
        margin: auto;
        width: 50%;
        margin-top: 1.0rem;
        border: none;
        background-color: #f6ac8266;
        padding: 12px;
        color: #d6cace;
        font-size: 13px;
        padding-left: 20px;
        font-weight: bold;

        ::placeholder {
          color: #d6cace;
          font-weight: bold;
        }
      }

      button {
        margin: auto;
        width: 40%;
        margin-top: 80px;
        border: none;
        border-radius: 50px;
        background-color: #18061d
        padding: 15px;
        font-size: 13px;
        color: #d6cace;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    loadingUser: state.authentication.loadingUser
  };
};

export default connect(
  mapStateToProps,
  { doSignUp }
)(Register);
