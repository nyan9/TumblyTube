import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createLike, deleteLike } from "../../actions/like_actions";
import LikeInterface from "./like_interface";

const mSTP = ({ session, entities: { videos, comments, users } }) => {
  return {
    comments,
    videos,
    currentUser: users[session.id],
  };
};

const mDTP = (dispatch) => {
  return {
    createLike: (like) => dispatch(createLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(LikeInterface));
