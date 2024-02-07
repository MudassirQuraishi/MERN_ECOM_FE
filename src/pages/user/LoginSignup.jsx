import React from 'react';
import { Routes, Route } from "react-router-dom";
import classes from './LoginSignup.module.css'
import Signup from './Signup'
import Login from './Login'
const LoginSignup = () => {
    return (
        <div className={classes["container-outer"]}>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Signup />} />
            </Routes>
        </div>
    );
};

export default LoginSignup;
