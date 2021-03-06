import {
  RECEIVE_VIDEO,
  RECEIVE_VIDEO_ERRORS,
  CLEAR_VIDEO_ERRORS,
} from "../actions/videos_actions";

export default (state = [], action) => {
  switch (action.type) {
    case RECEIVE_VIDEO:
      return [];
    case RECEIVE_VIDEO_ERRORS:
      return action.errors;
    case CLEAR_VIDEO_ERRORS:
      return [];
    default:
      return state;
  }
};
