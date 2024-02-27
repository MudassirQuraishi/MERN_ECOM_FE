import React, { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

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
    return (
        <>
            {children}
            {showFooterRoutes.includes(currentPath) && <Footer />}
        </>
    );
};
const NavbarWrapper = () => {
    const { pathname } = useLocation();
    const publicPaths = ["/login", "/signup", "/admin/login", "/admin/home"];

    return !publicPaths.includes(pathname) && <Navbar />;
};

const PrivateRouteHandler = ({ element }) => {
    const token = localStorage.getItem("auth-token");

    useEffect(() => {
        if (!token) {
            toast.warn("Please login to continue");
        }
    }, [token]);

    return token ? element : <Navigate to='/login' replace />;
};

function App() {
    return (
        <BrowserRouter>
            <NavbarWrapper />
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/' element={<HomePage />} />
                <Route path='/admin/*' element={<AdminDashboard />} />
                <Route path='/admin/login' element={<AdminLogin />} />
                <Route
                    path='/*'
                    element={
                        <PrivateRouteHandler
                            element={
                                <Routes>
                                    <Route
                                        path='/men'
                                        element={
                                            <Category
                                                category='men'
                                                banner={MenBanner}
                                            />
                                        }
                                    />
                                    <Route
                                        path='/women'
                                        element={
                                            <Category
                                                category='women'
                                                banner={WomenBanner}
                                            />
                                        }
                                    />
                                    <Route
                                        path='/kids'
                                        element={
                                            <Category
                                                category='kids'
                                                banner={KidsBanner}
                                            />
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
                                    <Route
                                        path='/product'
                                        element={<Product />}>
                                        <Route
                                            path=':productId'
                                            element={<Product />}
                                        />
                                    </Route>
                                    <Route path='/cart' element={<Cart />} />

                                    <Route
                                        path='/about-us'
                                        element={<About />}
                                    />
                                    <Route
                                        path='/profile'
                                        element={<Profile />}
                                    />
                                    <Route
                                        path='/reset-password'
                                        element={<PasswordChange />}
                                    />
                                </Routes>
                            }
                        />
                    }
                />
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
    );
}

export default App;
