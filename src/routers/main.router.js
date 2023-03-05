import { lazy } from "react";

<<<<<<< HEAD
const Posts = lazy(()=>import('../views/posts/posts.router'));

export const MainRouter = [
    {
        path:'/posts/*',
        name:'posts',
        component:Posts
    },
];
=======
const Posts = lazy(() => import("../views/posts/components/posts"));

export const MainRouter = [
  {
    path: "/posts/*",
    name: "posts",
    component: Posts,
  },
];
>>>>>>> d4be98e54dc149273535d7299b27082efb7fe03c
