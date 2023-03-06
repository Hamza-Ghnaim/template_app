import React, { Fragment, useState, useEffect,useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { CommentService } from '../services/comments.service';
import { UserContext } from "../../../context/user.context";

const Comments = () => {

  const { currentUser } = useContext(UserContext);
  const [Post,setpost] = useState("");
  const [comments, setComments] = useState([]);
  const [searchParams] = useSearchParams();
  const postID = +searchParams.get("postID");


  useEffect(() => {
    const fetchData = async () => {
      let commentData = await CommentService.list();
      const response1 = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postID}/`
      );
      const Response1 = await response1.json();
      setpost(Response1)
        // CommentService.list(),


      // postsData = await postsData.filter(
      //   item => item.userId === currentUser?.id,
      // );

      setComments(await [...commentData.filter(
        comment => comment.postId === postID,
      ),...comments])

    //   setcomments(
    //     comments
    //       .filter(el => userPosts.some(item => item.id === el.albumId))
    //       .map(item => ({ src: item.url, width: 600, height: 600 })),
    //   );


    };
    fetchData();
  }, [currentUser?.id]);



  const post = Post.body
    
  return (
    <Fragment>
      <div>
        <div >
          <h1 >See Comments</h1>
          <p >
            <strong>WHAT'S NEW TODAY</strong>
          </p>
        </div>
        <div id="posts_container"></div>
        <div >
          <div >
            <img alt="img" />
            <div >
              <h3>
                {currentUser.name}
              </h3>
              <h5 id="currentUserNAME">
                {currentUser.email}
              </h5>
            </div>
          </div>
          <p id="post">
            {post}
          </p>
          <hr id="hr1" />
          <div>See Comments</div>
          <div >
            <img alt="img" />
            <input
              id="comment"
              type="text"
              placeholder="Add comment..."
            />
          </div>
          <hr  id="hr2" />
          <div id="breaker"></div>
        </div>
        {comments &&
          comments.map((comment) => (
            <div key={comment.id} >
              <div >
                <img  alt="img" />
                <div >
                  <h3 >{comment.email}</h3>
                  <h5 >{comment.body}</h5>
                </div>
              </div>
              <hr  />
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default Comments;