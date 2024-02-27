// AdminDashboard.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import classes from './AdminDashboard.module.css'
import HomePage from '../pages/HomePage';
// import ProductsPage from '../pages/ProductsPage';
import Sidebar from '../Sidebar/AdminSidebar';

const AdminDashboard = () => {
    console.log('dashboard')
    return (
        <div className={classes["admin-dashboard"]}>
            <Sidebar />
            <div className={classes['page-container']}>
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    {/* <Route path="/add-product" element={<ProductsPage />} /> */}
                </Routes>
            </div>

        </div>
    );
};

export default AdminDashboard;
