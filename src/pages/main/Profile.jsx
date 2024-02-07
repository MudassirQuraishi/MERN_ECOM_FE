import React, { useContext } from "react";
import classes from './Profile.module.css';
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../utils/context/UserContext'

const Profile = () => {

    const userCtx = useContext(UserContext)
    const navigator = useNavigate();
    const logoutHanlder = () => {
        userCtx.removeToken()
        navigator('/')
    }
    if (userCtx.userDetails !== null) {
        var { username, email } = userCtx.userDetails
    }
    return (
        <div className={classes.outer}>
            <div className={classes["container-login"]}>
                <h1>Hi, User</h1>
                <div className={classes["form-container"]}>
                    <div className={classes["form-group"]}>
                        <label>Username:</label>
                        <p>{username}</p>
                    </div>

                    <div className={classes["form-group"]}>
                        <label>Email:</label>
                        <p>{email}</p>
                    </div>

                    <div className={classes["form-group"]}>
                        <label>Password:</label>
                        <p>********</p>
                    </div>

                    <div className={classes["form-buttons"]}>
                        <Link to='/reset-password' ><button >Reset Password</button></Link>
                        <button type="button" onClick={logoutHanlder}>Logout</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Profile;
