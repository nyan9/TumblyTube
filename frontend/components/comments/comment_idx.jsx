import React, { useState, useEffect } from "react";
import CommentIndexItem from "./comment_idx_item";

function CommentIndex(props) {
  const { comments, currentVideoId, fetchComments, deleteComment } = props;

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <CommentIndexItem comment={comment} deleteComment={deleteComment} />
        </li>
      ))}
    </ul>
  );
}
export default CommentIndex;
