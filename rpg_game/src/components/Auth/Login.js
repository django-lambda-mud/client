import React from "react";
import { connect } from "react-redux";
import { doLogIn } from "../../store/actions/authenticationActions";
import {Link } from "react-router-dom";
import img from '../../assets/atmosphere-blue-clouds-2531709.jpg'
// eslint-disable-next-line
import logo from '../../assets/M.svg'
import styled from 'styled-components'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = () => {
    const credentials = {
      username: this.state.username,
      password: this.state.password
    };

    this.props.doLogIn(credentials, this.props.history);
  };

  render() {
    return (
      <LoginWrapper>
        <div className="login">
          <div className="inputs">
            <img src={logo} alt=""></img>
            <input
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="Username"
              type="text"
            />
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Password"
            />
            <button onClick={this.login}>Resume Game</button>
            <p>Dont have an account with us?</p> <Link to="/register"><span>Register Here</span></Link>
          </div>
        </div>
      </LoginWrapper>
    );
  }
}

const LoginWrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;

  .login {
    img {
      margin: auto;
      width: 7%;
      margin-bottom: 50px;
    }
    .inputs {
      display: flex;
      flex-direction: column;
      // align-items: center;
      margin: auto;
      margin-top: 20%;
      width: 50%;
      color: white;

      input {
        margin: auto;
        width: 50%;
        margin-top: 1.0rem;
        border: none;
        background-color: #515d8c61;
        padding: 12px;
        color: #e1e2e6;
        font-size: 13px;
        padding-left: 20px;
        font-weight: bold;
        font-family: 'Antic', sans-serif;

        ::placeholder {
          color: #e1e2e6;
          font-weight: bold;
        }
      }

      button {
        margin: auto;
        width: 40%;
        margin-top: 80px;
        border: none;
        border-radius: 50px;
        background-color: #020011
        padding: 15px;
        font-size: 13px;
        color: #e1e2e6;
        font-weight: bold;
        cursor: pointer;
      }

      p {
        font-size: 14px;
      }

      span {
        font-size: 14px;
        font-weight: bold;
      }

      span {
        &:hover {
          color: #d6cace;
        }
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
  { doLogIn }
)(Login);
