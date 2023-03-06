import React, { Fragment,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../context/user.context';

// import NewComment from "../Comments/NewComment";

const Post = (props) => {
    const { currentUser } = useContext(UserContext);
    // const navigate = useNavigate();
//   const SeeComments = async (id) => {
//     navigate(`./Comments/?postID=${id}`);
//   };

  return (
    <Fragment>
      <div >
        <div >
          <img  alt="img" />
          <div >
            <h3 >{currentUser.name}</h3>
            <h5 >@{currentUser.username}</h5>
          </div>
        </div>
        {/* <p
          onClick={() => SeeComments(props.data.id)}
        > */}
        <p
        >
          {props.data.body}
        </p>
        <hr  />
        <div >See Comments</div>
        {/* <NewComment /> */}
        <hr />
      </div>
    </Fragment>
  );
};

export default Post;