import { lazy } from "react";

const Posts = lazy(()=>import('../views/posts/posts.router'));

export const MainRouter = [
    {
        path:'/posts/*',
        name:'posts',
        component:Posts
    },
];