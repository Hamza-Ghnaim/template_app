import React, { useState, useContext, useEffect,Fragment } from 'react';
// import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../context/user.context';
import { PostService } from '../services/posts.service';
import AddPost from './AddPost';
import Post from './post';

const Posts = () => {

// const navigate = useNavigate();

const [clicked, setclicked] = useState(false);
  const { currentUser } = useContext(UserContext);
  const [posts,setPosts] = useState([]);

  // const SeeComments = async (id) => {
  //   // navigate(`./Comments/?postID=${id}`, { state: { body } });
  //   navigate(`./Comments/?postID=${id}`);
  // };

  const addPOST = () => {
    setclicked(!clicked);
  };

  const setPostContent = (newPostArray) => {
    setPosts([newPostArray, ...posts]);
    // console.log(PostsArray);
  };

  useEffect(() => {
    const fetchData = async () => {
      let postsData = await PostService.list();
        // CommentService.list(),


      // postsData = await postsData.filter(
      //   item => item.userId === currentUser?.id,
      // );

      setPosts(await [...postsData.filter(
        item => item.userId === currentUser?.id,
      ),...posts])

    //   setcomments(
    //     comments
    //       .filter(el => userPosts.some(item => item.id === el.albumId))
    //       .map(item => ({ src: item.url, width: 600, height: 600 })),
    //   );


    };
    fetchData();
  }, [currentUser?.id]);

  return (
    <>
    {clicked && <AddPost onAddPost={setPostContent} onBTNCLICK={addPOST} />}
      <div >
        <div >
          
          <h1 >Discover</h1>
          <p >
            <strong>WHAT'S NEW TODAY</strong>
          </p>
        <br />
        </div>
      </div>
      {posts &&
        posts.map((post,index) => (
          <Fragment key={index}>
            <Post data={post}/>
          </Fragment>
        ))}
      <button type='button' onClick={addPOST} />
   </>
  );
};

export default Posts;




// import React, { Fragment } from "react";
// import { useNavigate } from "react-router-dom";
// import classes from "./Posts.module.css";
// import Ellipse from "./Ellipse.png";
// import NewComment from "../Comments/NewComment";

// const Posts = () => {
//   const navigate = useNavigate();
  

//   const SeeComments = async (id) => {
//     // navigate(`./Comments/?postID=${id}`, { state: { body } });
//     navigate(`./Comments/?postID=${id}`);
//   };

//   return (
//     <Fragment>
    //   <div >
    //     <div >
    //       <img src={Ellipse} alt="img" />
    //       <div >
    //         <h3 >{user.name}</h3>
    //         <h5>@{user.username}</h5>
    //       </div>
    //     </div>
    //     <p
    //       onClick={() => SeeComments(props.data.id)}
    //     >
    //       {props.data.body}
    //     </p>
    //     <hr id="hr1"/>
    //     <div >See Comments</div>
    //     <NewComment />
    //     <hr  />
    //   </div>
//     </Fragment>
//   );
// };

// export default Posts;