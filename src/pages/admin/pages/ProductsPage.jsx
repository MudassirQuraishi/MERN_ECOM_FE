// ProductsPage.js

import React from 'react';
import { Route, Link, Routes } from "react-router-dom";
import AddProductPage from './AddProductPage';
import ViewProductsPage from './ViewProductPage';

const ProductsPage = () => {
    return (
        <div>
            <h2>Products Page</h2>
            <ul>
                <li><Link to="/admin/products/add">Add Product</Link></li>
                <li><Link to="/admin/products/view">View Products</Link></li>
            </ul>

            <Routes>
                <Route path="/admin/products/add" component={AddProductPage} />
                <Route path="/admin/products/view" component={ViewProductsPage} />
            </Routes>


        </div>
    );
};

export default ProductsPage;
