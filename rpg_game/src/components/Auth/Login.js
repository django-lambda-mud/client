import React from "react";
import { connect } from "react-redux";
import { doLogIn } from "../../store/actions/authenticationActions";
import {Link } from "react-router-dom";

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
      <div className="login">
        <div className="login">

          <div className="inputs">
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
          </div>
          <p className="btn btn--white" onClick={this.login}>
            Login
            {/* {this.props.loadingUser ? (<Loader
               type="ThreeDots"
               color="#1f2a38"
               height="12"
               width="26" />) :
               (<i className="fa fa-user-plus"></i>)} */}
          </p>
        </div>
        <p>Dont have an Account ?</p>
        <Link to="/register">Register</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loadingUser: state.authentication.loadingUser
  };
};

export default connect(
  mapStateToProps,
  { doLogIn }
)(Login);
