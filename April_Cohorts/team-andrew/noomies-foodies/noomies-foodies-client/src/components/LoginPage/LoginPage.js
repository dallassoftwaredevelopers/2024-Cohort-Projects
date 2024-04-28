import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import './LoginPage.css'

const LoginPage = () => {
  return (
    <>
        <div className="flex-container">
            <div className="background-left"></div>

            <div className="flex-item-left">
                <img className="logo" alt="logo"src="/images/Logo foodies.svg"></img>
                <img className="background-leaf" alt="leaf" src="/images/login-fruit.png"></img>
            </div>
            <div className="flex-item-right">
                <h1>Welcome <span className="clr-secondary">Back!</span></h1>
                <p>Login and get started!</p>
                <LoginForm />
                <p>Don't have an account yet? <a href='#'>Sign up now!</a></p>
            </div>
        </div>
    </>
  );
};

export default LoginPage;
