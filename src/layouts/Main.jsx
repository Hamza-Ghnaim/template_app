import React from "react";
<<<<<<< HEAD
import {MainRouter} from "../routers"
import { useNavigate, Routes, Route, Navigate } from 'react-router-dom';

const Wrapper = ({ Component }) => <Component />;


const MainLayout = ()=>{
    return( 
        <Routes>
            {MainRouter?.map((router,index)=>(
                <Route 
                    path={router.path}
                    exact = {router.isExact}
                    key = {`${index}-${router.name}`}
                    element={<Wrapper Component = {router.component}/>}
                />
            ))}
            <Route path = '/' element={<Navigate replace to='/login'/>} />
        </Routes>
        )
=======
import { useNavigate, Routes, Route, Navigate } from "react-router-dom";
// import {Main}

const MainLayout = () => {
  return (
    <Routes>
      <Route></Route>
    </Routes>
  );
>>>>>>> d4be98e54dc149273535d7299b27082efb7fe03c
};

export default MainLayout;
