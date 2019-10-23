import React from "react";
import { connect } from "react-redux";
import { doSignUp } from "../../store/actions/authenticationActions";

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
      <div className="log-reg">
        <div className="register">
          <div className="inputs">
            <input
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              placeholder="Username"
              type="text"
            />
            <input
              name="password1"
              type="password"
              onChange={this.handleChange}
              value={this.state.password1}
              placeholder="Password One"
            />
            <input
              name="password2"
              type="password"
              onChange={this.handleChange}
              value={this.state.password2}
              placeholder="Password Two"
            />
          </div>

          <p onClick={this.register} className="btn btn--white">
            register
          </p>
        </div>
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
  { doSignUp }
)(Register);
