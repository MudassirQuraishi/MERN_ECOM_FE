import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({
    token: null,
    setToken: () => { },
    removeToken: () => { },
    getToken: () => { },
    userDetails: {},
});

const UserContextProvider = (props) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://mern-ecom-be.onrender.com/api/get-user/${token}`);
                setUser(response.data.USER_DATA);
            } catch (error) {
                alert('Session Expired. Please Login again')
                removeTokenHandler()
            }
        };

        if (token !== null) {
            fetchData();
        }
    }, [token]);

    useEffect(() => {
        const TOKEN_LS = localStorage.getItem('auth-token');
        setToken(TOKEN_LS);
    }, []);

    useEffect(() => {
        const removeTokenTimeout = setTimeout(() => {
            removeTokenHandler();
        }, 60 * 60 * 1000);

        return () => clearTimeout(removeTokenTimeout);
    }, [token]);

    const setTokenHandler = (token) => {
        setToken(token);
        localStorage.setItem('auth-token', token);
    };

    const removeTokenHandler = () => {
        setToken(null);
        if (localStorage.getItem('auth-token')) {
            localStorage.removeItem('auth-token');
        }

    };

    const getToken = () => {
        const storedToken = localStorage.getItem('auth-token');
        return storedToken;
    };

    const contextValue = {
        token: token,
        setToken: setTokenHandler,
        removeToken: removeTokenHandler,
        getToken: getToken,
        userDetails: user,
    };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
