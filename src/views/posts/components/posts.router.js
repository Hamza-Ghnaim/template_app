import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Albums = lazy(() => import("./index"));

const Router = () => (
  <Routes>
    <Route path="*" exact={true} element={<Albums />} />
  </Routes>
);

export default Router;
