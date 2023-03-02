import React from "react";
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
};

export default MainLayout;