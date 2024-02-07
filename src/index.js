import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import ShopContextProvider from "./utils/context/ShopContext";
import UserContextProvider from "./utils/context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ShopContextProvider>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </ShopContextProvider>
    </React.StrictMode>
);
