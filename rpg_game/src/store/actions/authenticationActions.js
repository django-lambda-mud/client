import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

const appURL = "https://lambda-mud-test.herokuapp.com";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const LOADING_USER = "LOADING_USER";
export const GET_USER = "GET_USER";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const SIGNUP_ERROR = "SIGNUP_ERROR";
export const USER_ERROR = "USER_ERROR";

export const genericAction = (type, payload) => ({
  type,
  payload
});

export const doLogIn = (user ) => dispatch => {
  debugger
  dispatch(genericAction(LOADING_USER, true));
  axios
    .post(`${appURL}/api/login`, user)
    .then(response => {
      debugger
      const { token, userId } = response.data;
      dispatch(genericAction(LOGIN, userId));
      localStorage.setItem("token", token);
      localStorage.setItem("userId", userId);
    })
    .catch(error => {
      debugger
      let { errorMessage } = error.response.data;
      dispatch(genericAction(LOGIN_ERROR, errorMessage));
    })
    .finally(() => dispatch(genericAction(LOADING_USER, false)));
};

export const doSignUp = (user) => dispatch => {
  debugger
  dispatch(genericAction(LOADING_USER, true));
  axios
    .post(`${appURL}/api/registration/`, user)
    .then(response => {
      debugger
      const { key, id } = response.data;
      dispatch(genericAction(LOGIN, user.id));
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user.id);
    })
    .catch(error => {
      debugger
      let { errorMessage } = error.response.data;
      dispatch(genericAction(SIGNUP_ERROR, errorMessage));
    })
    .finally(() => dispatch(genericAction(LOADING_USER, false)));
};

export const doLogOut = () => dispach => {
  localStorage.removeItem("token");
  dispach(genericAction(LOGOUT));
};

export const doGetUser = () => dispatch => {
  dispatch(genericAction(LOADING_USER, true));
  axiosWithAuth()
    .get(`${appURL}/profile`)
    .then(response => {
      dispatch(genericAction(GET_USER, response.data));
    })
    .catch(error =>
      dispatch(genericAction(USER_ERROR, error.response.data.errorMessage))
    )
    .finally(() => dispatch(genericAction(LOADING_USER, false)));
};
