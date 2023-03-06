import React, { lazy,Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Posts = lazy(() => import('./components/posts'));
const Comments = lazy(()=> import('./components/comments'))


const Router = () => (
  <Suspense fallback={<h2>loading..</h2>}>
    <Routes>
      <Route path='*' exact={true} element={<Posts />} />
      <Route path='/comments' exact={true} element={<Comments />}/>
    </Routes>
  </Suspense>
);

export default Router;

