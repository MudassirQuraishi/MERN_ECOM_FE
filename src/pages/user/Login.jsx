import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import classes from './LoginSignup.module.css'
import { emailValidation, passwordValidation } from '../../utils/genricFunctions/validations'
import { UserContext } from "../../utils/context/UserContext"
import { ShopContext } from '../../utils/context/ShopContext'


const Login = () => {
    const userCtx = useContext(UserContext);
    const shopCtx = useContext(ShopContext);

    const emailRef = useRef();
    const passwordRef = useRef();
    const [formIsValid, setFormIsValid] = useState({
        username: true,
        usernameChecked: false,
        email: true,
        emailChecked: false,
        password: true,
        passwordChecked: false,
        overall: true,
    });
    const navigate = useNavigate();
    const validateEmailHandler = () => {
        if (!emailValidation(emailRef.current.value)) {
            return setFormIsValid((prev) => ({
                ...prev,
                email: false,
                emailChecked: true,
                overall: false,
            }))
        }
        return setFormIsValid((prev) => ({
            ...prev,
            email: true,
            overall: true,
        }))
    }
    const validatePasswordHandler = () => {
        if (!passwordValidation(passwordRef.current.value)) {
            return setFormIsValid((prev) => ({
                ...prev,
                password: false,
                passwordChecked: true,
                overall: false,
            }))
        }
        return setFormIsValid((prev) => ({
            ...prev,
            password: true,
            overall: true,
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formIsValid.overall === false) {
            toast.warn('Enter Valid Details', {
                position: "bottom-left",
            });
        }
        else {
            let toastId;
            try {
                const formData = {
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }
                toastId = toast('Please wait...', {
                    autoClose: true, hideProgressBar: true
                });
                const response = await axios.post('https://44.229.200.200:3000/auth/login', formData);
                console.log(response)
                if (response.status === 200) {
                    toast.update(toastId, {
                        render: 'Login successful',
                        type: 'success',
                    });
                    const token = response.data.encryptedId;
                    shopCtx.getCartItems()
                    userCtx.setToken(token)
                    navigate('/');
                }
            }
            catch (error) {
                if (error.response.status === 404) {
                    toast.update(toastId, { render: 'Incorrect email Id or password', type: 'error', autoClose: 3000 });
                    navigate('/register/login');
                }

                else if (error.response.status === 500 || error.response.status === 404) {
                    toast.update(toastId, { render: 'Oops Something went wrong', type: 'error', autoClose: 3000 });
                }

            }
        }
    }


    return (
        <div className={classes["container-outer"]}>
            <div className={classes["container-login"]}>
                <h1>Login</h1>
                <form className={classes["form-container"]} onSubmit={handleSubmit}>
                    <div
                        className={`${classes.control} ${formIsValid.email === false ? classes.invalid : ""
                            }`}>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your email'
                            ref={emailRef}
                            onBlur={validateEmailHandler}
                            autoComplete='off'
                        />
                        {formIsValid.email === false ? <p>Enter a valid email address</p> : <p></p>}
                    </div>
                    <div
                        className={`${classes.control} ${formIsValid.password === false ? classes.invalid : ""
                            }`}>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            autoComplete='off'
                            ref={passwordRef}
                            onBlur={validatePasswordHandler}
                        />
                        {formIsValid.password === false ? <p>Password should be a minimun of 8 characters long</p> : <p></p>}
                    </div>
                    <Link to="/reset-password">Forgot password ?</Link>
                    <button className={classes.submit} type='submit' >
                        Continue
                    </button>
                </form>
                <p className={classes.toggle}>
                    Don't have an Account ?<span><Link to="/signup">Signup Here</Link></span>
                </p>
            </div>
        </div>
    );
};

export default Login;