import React, { Fragment, useState } from "react";
// import classes from "../Posts/AddPost.module.css";

const AddPost = (props) => {
  const [content, setContent] = useState({
    UserID: null,
    id: null,
    title: "sthing",
    body: "",
  });
  const postContnet = (event) => {
    setContent({
      UserID: Date.now(),
      id: Date.now(),
      title: "sthing",
      body: event.target.value,
    });
  };
  const submitPost = () => {
    if (content.body.trim().length !== 0) {
      props.onAddPost(content);
      props.onBTNCLICK();
    } else {
      alert("pleas enter something in the text area");
    }
    // console.log(content);
  };
  return (
    <Fragment>
      <div >
        <div >
          <div >
            <textarea
              name="new-post"
              id="new-post"
              placeholder="insert your thoughts here...."
              onChange={postContnet}
            ></textarea>
            <div >
              <button type="button" id="upload_post" onClick={submitPost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
};

export default AddPost;