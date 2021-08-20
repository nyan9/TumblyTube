import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_NAME_EMAIL = "RECEIVE_NAME_EMAIL";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const receiveNameEmail = (user) => {
  return {
    type: RECEIVE_NAME_EMAIL,
    user,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

export const signup = (user) => (dispatch) => {
  return APIUtil.signup(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const login = (user) => (dispatch) => {
  return APIUtil.login(user).then(
    (user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

// checks if username/email exists in the database
export const identifyUser = (inputValue) => (dispatch) => {
  return APIUtil.identifyUser(inputValue).then(
    (user) => dispatch(receiveNameEmail(user)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const logout = () => (dispatch) => {
  return APIUtil.logout().then((user) => dispatch(logoutCurrentUser()));
};
