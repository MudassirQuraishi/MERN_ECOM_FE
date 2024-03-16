import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import classes from './LoginSignup.module.css'
import { emailValidation, passwordValidation, userNameValidation } from '../../utils/genricFunctions/validations'

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const checkBoxRef = useRef();
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
    const validateUserNameHandler = () => {
        if (!userNameValidation(nameRef.current.value)) {
            return setFormIsValid((prev) => ({
                ...prev,
                username: false,
                usernameChecked: true,
                overall: false,
            }))
        }
        return setFormIsValid((prev) => ({
            ...prev,
            username: true,
            overall: true,
        }))
    }
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
        else if (!checkBoxRef.current.checked) {
            toast.warn('Please agree to the terms of use and privacy');
        }
        else {
            let toastId;
            try {
                const formData = {
                    username: nameRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }
                toastId = toast('Please wait...', {
                    autoClose: true, hideProgressBar: true
                });
                const response = await axios.post('https://44.229.200.200:3000/auth/signup', formData);
                console.log(response)
                if (response.status === 201) {
                    console.log('201')
                    toast.update(toastId, {
                        render: 'Signup successful',
                        type: 'success',
                    });
                    navigate('/login');

                }

            }
            catch (error) {
                if (error.response.status === 409) {
                    toast.update(toastId, { render: 'Email ID already in use', type: 'error', autoClose: 3000 });
                    navigate('/login');
                }
                else if (error.response.status === 500) {
                    toast.update(toastId, { render: 'Oops Something went wrong', type: 'error', autoClose: 3000 });
                }

            }
        }
    }
    return (
        <div className={classes["container-outer"]}>
            <div className={classes.container}>
                <h1>Signup</h1>
                <form className={classes["form-container"]} onSubmit={handleSubmit}>
                    <div
                        className={`${classes.control} ${formIsValid.username === false ? classes.invalid : ""
                            }`}>
                        <input
                            type='text'
                            id='username'
                            placeholder='Enter your username'
                            ref={nameRef}
                            onBlur={validateUserNameHandler}
                            autoComplete='off'
                        />
                        {(formIsValid.username === false) ? <p>User name cannot be empty</p> : <p></p>}
                    </div>
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
                    <div className={classes["terms-and-conditions"]}>
                        <input type="checkbox" name="terms-check-box" id='terms-check-box' ref={checkBoxRef} />
                        <p>By continuing, I agree to the terms of use and privacy policy</p>
                    </div>
                    <button className={classes.submit} type='submit' >
                        Continue
                    </button>
                </form>

                <p className={classes.toggle}>
                    Already have an Account ?<span><Link to="/login">Login Here</Link></span>
                </p>
            </div>
        </div>
    );
};

export default Signup;