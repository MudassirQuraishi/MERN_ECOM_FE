import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./layout/header/Navbar";
import HomePage from "./pages/main/Home";
import Category from "./pages/main/Category";
import Product from "./pages/main/Product";
import Cart from "./pages/main/Cart";

import About from "./pages/main/About";
import Footer from "./layout/footer/Footer";

import MenBanner from "./assets/banner_mens.png";
import WomenBanner from "./assets/banner_women.png";
import KidsBanner from "./assets/banner_kids.png";
import AdminLogin from "./pages/admin/Login/adminLogin";
import Profile from "./pages/main/Profile";
import PasswordChange from "./components/PasswordChange/PasswordChange";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import AdminDashboard from "./pages/admin/Dashboard/AdminDashboard";

const FooterWrapper = ({ children }) => {
    const showFooterRoutes = [
        "/",
        "/mens",
        "/womens",
        "/kids",
        "/winter",
        "/summer",
        "/fall",
        "/product",
        "/cart",
        "/about-us",
        "/signup",
        "/login",
    ];
    const currentPath = window.location.pathname;
    console.log(currentPath);
    return (
        <>
            {children}
            {showFooterRoutes.includes(currentPath) && <Footer />}
        </>
    );
};

function App() {
    const adminPaths = [
        "/admin/login",
        "/admin/dashboard",
        "/admin/home",
        "/admin",
    ];
    const path = window.location.pathname;
    return (
        <>
            <BrowserRouter>
                {!adminPaths.includes(path) && <Navbar />}
                <Routes>
                    <Route
                        path='/mens'
                        element={<Category category='men' banner={MenBanner} />}
                    />
                    <Route
                        path='/womens'
                        element={
                            <Category category='women' banner={WomenBanner} />
                        }
                    />
                    <Route
                        path='/kids'
                        element={
                            <Category category='kid' banner={KidsBanner} />
                        }
                    />
                    <Route
                        path='/winter'
                        element={<Category category='winter' />}
                    />
                    <Route
                        path='/summer'
                        element={<Category category='summer' />}
                    />
                    <Route
                        path='/fall'
                        element={<Category category='fall' />}
                    />
                    <Route path='/product' element={<Product />}>
                        <Route path=':productId' element={<Product />} />
                    </Route>
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/admin/*' element={<AdminDashboard />} />
                    <Route path='/admin/login' element={<AdminLogin />} />

                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/about-us' element={<About />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route
                        path='/reset-password'
                        element={<PasswordChange />}
                    />
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<HomePage />} />
                </Routes>
                <ToastContainer
                    position='bottom-left'
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover
                    theme='light'
                />
                <FooterWrapper />
            </BrowserRouter>
        </>
    );
}

export default App;
