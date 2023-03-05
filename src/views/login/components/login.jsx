import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';

import { AuthService } from "../services/auth.service";


const Login=()=>{

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async event => {
        event.preventDefault();
    
        try {
          const verifiedUser = await AuthService.login(email);
    
          if (!verifiedUser) {
            setError('Invalid Credentials!');
          } else {
            navigate('/posts');
          }
        } catch (error) {
          setError('Something went wrong.');
        }
      };
    

    return (
        <div className='login-main'>
          <h1 className='header'>Log in</h1>
          <form className='form' onSubmit={handleSubmit}>
            <input
              className='email'
              type='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
              placeholder='Email'
            />
            <input className='password' type='password' placeholder='Password' />
            <button className='submit-btn' type='submit'>
              LOG IN
            </button>
            {error && <div className='errorMsg'>{error}</div>}
          </form>
        </div>
      );
    
};

export default Login