import React from "react";

import LoginLayout from './Login';
import MainLayout from "./Main";

const Layout = ()=>{
    const cond = true;
    return (
        <>
            {cond ? (<LoginLayout/>) : (<MainLayout/>)}
        </>
    )
};

export default Layout;