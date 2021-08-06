import { combineReducers } from "redux";
import commentsReducer from "./comments_reducer";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  comments: commentsReducer,
});

export default entitiesReducer;
