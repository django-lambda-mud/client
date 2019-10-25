import React from "react";
import { connect } from "react-redux";
import { doSignUp } from "../../store/actions/authenticationActions";
import { Link } from "react-router-dom";
import img from "../../assets/atmosphere-blue-clouds-2531709.jpg";
import logo from "../../assets/M.svg";
import styled from "styled-components";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      password2: "",
      error: ""
    };
  }

  handleChange = e => {
    if (this.state.username && this.state.password1 && this.state.password2)
      this.setState({
        error: ""
      });
    else
      this.setState({
        error: "Please fill in all fields"
      });
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
        password1: "",
        password2: "",
        username: "",
        error: ""
      });
    } else {
      this.setState({
        error: "Please fill in all fields"
      });
    }
  };

  render() {
    const { loadingUser, signUpError } = this.props;
    return (
      <RegisterWrapper>
        <div className="register">
          <div className="inputs">
            <img src={logo} alt="logo"></img>
            {signUpError && signUpError.non_field_errors &&
              signUpError.non_field_errors.map(e => (
                <p key={e} className="error">
                  {e}
                </p>
              ))}
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
            {signUpError && signUpError.password1 &&
              signUpError.password1.map(e => (
                <p key={e} className="error">
                  {e}
                </p>
              ))}
            <input
              name="password2"
              type="password"
              onChange={this.handleChange}
              value={this.state.password2}
              placeholder="Verify Password"
            />
            {signUpError && signUpError.password2 &&
              signUpError.password2.map(e => (
                <p key={e} className="error">
                  {e}
                </p>
              ))}
            {this.state.error && <p className="error">{this.state.error}</p>}
            <button onClick={this.register}>
              {loadingUser ? "Getting Started" : "Get Started"}
            </button>
            <p>Already have an account?</p>{" "}
            <Link to="/">
              <span>Login Here</span>
            </Link>
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
      margin: auto;
      margin-top: 20%;
      width: 50%;
      color: white;

      input {
        margin: auto;
        width: 50%;
        margin-top: 1rem;
        border: none;
        background-color: #515d8c61;
        padding: 12px;
        color: #e1e2e6;
        font-size: 13px;
        padding-left: 20px;
        font-weight: bold;
        font-family: "Antic", sans-serif;

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
        background-color: #020011;
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

      .error {
        color: red;
        text-align: center;
      }
    }
  }
`;

const mapStateToProps = state => {
  return {
    loadingUser: state.authentication.loadingUser,
    signUpError: state.authentication.signUpError
  };
};

export default connect(
  mapStateToProps,
  { doSignUp }
)(Register);
