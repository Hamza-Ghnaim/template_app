import React, { Fragment,useContext } from "react";
import { UserContext } from '../../../context/user.context';

const CommentsList = (props) => {

  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      {props.data.map((comment) => (
        <Fragment key={Math.random() + Date.now()}>
          <div >
            <div >
              <img  alt="img" />
              <div >
                <h3>{currentUser.name}</h3>
                <p >{comment.body}</p>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};

export default CommentsList;