import React, { Fragment, useState } from "react";
import CommentsList from "./commentslist";
// import classes from "../Posts/Posts.module.css";

const NewComment = () => {
  const [state, setState] = useState(false);
  const [commentContent, setcommentContent] = useState([
    {
      body: "",
    },
  ]);
  const newComment = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value.trim().length !== 0 &&
      event.target.value !== null
    ) {
      setState(true);
      let filteredCommentContent = commentContent.filter((obj) => {
        return obj.body.length !== 0;
      });

      setcommentContent([
        ...filteredCommentContent,
        { body: event.target.value },
      ]);
      event.target.value = "";
    }
  };
  return (
    <Fragment>
      {state && <CommentsList data={commentContent} />}
      <div >
        <img alt="img" />
        <input
          id="comment"
          type="text"
          placeholder="Add comment..."
          onKeyDown={newComment}
        />
      </div>
    </Fragment>
  );
};

export default NewComment;