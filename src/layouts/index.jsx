import React from "react";
import { useMatch } from "react-router";
import { LoginRouter } from "../routers";
import {UserProvider} from '../context/user.context';

import LoginLayout from './Login';
import MainLayout from "./Main";

const isLoginRoute =()=>!!LoginRouter.find(route=>useMatch(route.path));  

const Layout = ()=>{
    const isLoginPage = isLoginRoute();
    return (
        <>
            {isLoginPage ? (<LoginLayout/>) 
            : (
            <UserProvider>
                <MainLayout/>
            </UserProvider>)}
        </>
    )
};

export default Layout;