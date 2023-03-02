import React from 'react';
import config from './conifg'
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './layouts';

axios.defaults.baseURL=config.apiBaseUrl;

axios.interceptors.response.use(
  res=>res,
  err=>{
    if(
      err?.response?.status ===401 &&
      !window.location.href.includes('login')){
        window.location.href=`/login?returnUrl=${
          encodeURIComponent(
            window.location.href.replace(
              window.location.origin,''
            )
          )
        }`
      }else{
        throw err;
      }
  }
  )


function App() {
  return (
    <BrowserRouter>
      <Layout/>
    </BrowserRouter>
  );
}

export default App;
