import { lazy } from "react";

const Posts = lazy(() => import("../views/posts/components/posts"));

export const MainRouter = [
  {
    path: "/posts/*",
    name: "posts",
    component: Posts,
  },
];
