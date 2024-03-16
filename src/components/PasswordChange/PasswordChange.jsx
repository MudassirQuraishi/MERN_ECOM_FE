import React, { useRef, useState, useContext, } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import classes from './PasswordChange.module.css';
import { UserContext } from '../../utils/context/UserContext'

const Profile = () => {
    const navigator = useNavigate()
    const userCtx = useContext(UserContext)
    const oldPassword = useRef();
    const newPassword = useRef();
    const newPasswordCheck = useRef();
    const [errors, setErrors] = useState({
        old: false,
        new: false,
        check: false,
        overall: false
    })
    const resetForm = () => {
        oldPassword.current.ref = '';
        newPassword.current.ref = '';
        newPasswordCheck.current.ref = '';
    }
    const validateOldPasswordHanlder = () => {
        if (oldPassword.current.value.trim() === '' || oldPassword.current.value.trim().length < 8) {
            return setErrors((prev) => ({
                ...prev,
                old: true,
                overall: false
            }))
        }
        return setErrors((prev) => ({
            ...prev,
            old: false,
            overall: true
        }))
    }
    const validateNewPasswordHanlder = () => {
        if (newPassword.current.value.trim() === '' || newPassword.current.value.trim().length < 8) {
            return setErrors((prev) => ({
                ...prev,
                new: true,
                overall: false
            }))
        }
        else if (newPassword.current.value.trim() === oldPassword.current.value.trim()) {
            return setErrors((prev) => ({
                ...prev,
                new: true,
                overall: false
            }))
        }
        return setErrors((prev) => ({
            ...prev,
            new: false,
            overall: true
        }))
    }
    const matchPasswordHandler = () => {
        if (newPassword.current.value !== newPasswordCheck.current.value) {
            return setErrors((prev) => ({
                ...prev,
                check: true,
                overall: false
            }))
        }
        return setErrors((prev) => ({
            ...prev,
            check: false,
            overall: true
        }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        matchPasswordHandler();
        if (!errors.overall) {
            toast.warn('Fill out all the fields');
        }
        else {
            try {
                const formData = {
                    oldPassword: oldPassword.current.value,
                    newPassword: newPassword.current.value

                }
                const token = userCtx.getToken('auth-token');
                if (token) {
                    const response = await axios.post('https://mern-ecom-be.onrender.com/auth/reset-password', formData,
                        {
                            headers: {
                                Authorization: token
                            }
                        })
                    console.log(response)
                    if (response.status === 200) {
                        if (userCtx.token !== null) {
                            navigator('/profile');
                            resetForm()
                        } else {
                            navigator('/register/login');
                            resetForm()
                        }
                        toast.info('Password Changed Successfully');
                    }
                }

            }
            catch (error) {
                if (error.response.status === 400) {
                    toast.warn('Bad Credentials. Please try again later');
                    userCtx.removeToken()
                }
                else if (error.response.status === 401) {
                    toast.warn('Expired or Invalid Token');
                    userCtx.removeToken()
                    navigator('/register/login');
                    resetForm()
                }
                else if (error.response.status === 403) {
                    toast.warn('You are not authorized to access this page');
                    userCtx.removeToken()
                    navigator('/register/login');
                    resetForm()
                }
                else if (error.response.status === 404) {
                    toast.warn('No Data Found');
                    userCtx.removeToken()
                    navigator('/register/login');
                    resetForm()
                }
                else if (error.response.status === 500) {
                    toast.warn('Oopps!! Something went wrong');
                    userCtx.removeToken()
                    navigator('/register/login');
                    resetForm()
                }
            }


        }
    }
    const cancelButtonHandler = () => {
        if (userCtx.token !== null) {
            navigator('/profile')
        }
        else {
            navigator('/register/login')
        }
    }
    return (
        <div className={classes.outer}>
            <div className={classes["container-login"]}>
                <h1>Change your password</h1>
                <div className={classes["form-container"]}>
                    <form onSubmit={handleSubmit}>
                        <div className={classes["form-group"]}>
                            <label htmlFor="username">Old Password:</label>
                            <div className={` ${errors.old === true ? classes.invalid : ""
                                }`}>
                                <input type="text" id="oldpassword" name="oldpassword" ref={oldPassword} autoComplete="off" placeholder="Enter your old password" onBlur={validateOldPasswordHanlder} />
                                {errors.old ? <p>Old password not valid</p> : <p></p>}
                            </div>
                        </div>

                        <div className={classes["form-group"]}>
                            <label htmlFor="email">New Password:</label>
                            <div className={` ${errors.new ? classes.invalid : ""
                                }`}>
                                <input type="text" id="newpassword" name="newpassword" ref={newPassword} autoComplete="off" placeholder="Enter your new password" onBlur={validateNewPasswordHanlder} />
                                {errors.new ? <p>Password must be 8 characters long</p> : <p></p>}
                            </div>

                        </div>

                        <div className={classes["form-group"]}>
                            <label htmlFor="password">Confirm Password:</label>
                            <div className={` ${errors.check ? classes.invalid : ""
                                }`}>
                                <input type="password" id="checkpassword" name="checkpassword" ref={newPasswordCheck} autoComplete="off" placeholder="Confirm your new password" onBlur={matchPasswordHandler} />
                                {errors.check ? <p>Old and new passwords doesnt match</p> : <p></p>}
                            </div>

                        </div>
                        <div className={classes["form-buttons"]}>
                            <button type="submit" >Change Password</button>
                            {<button type="button" onClick={cancelButtonHandler} >Cancel</button>}

                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Profile;
