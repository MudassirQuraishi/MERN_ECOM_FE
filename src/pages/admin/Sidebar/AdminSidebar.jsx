// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AdminSidebar.module.css';

const AdminSidebar = () => {
    return (
        <div className={classes.sidebar}>
            <ul className={classes.menu}>
                <li className={classes['menu-item']}>
                    <Link to="/admin/home" className={classes['menu-link']}>Home</Link>
                </li>
                <li className={classes['menu-item']}>
                    <Link to="/admin/add-product" className={classes['menu-link']}>Add Product</Link>
                </li>
                {/* Add other links as needed */}
            </ul>
        </div>
    );
};

export default AdminSidebar;
