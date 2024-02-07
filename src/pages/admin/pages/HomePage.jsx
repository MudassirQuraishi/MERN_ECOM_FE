// HomePage.js

import React, { useState } from 'react';
import classes from './HomePage.module.css'; // Import the CSS module

const HomePage = () => {
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        imageUrl: '',
        newPrice: '',
        oldPrice: '',
        tags: [],
    });

    const handleAddProduct = () => {
        // Handle product addition logic here
        console.log('Product added:', formData);
        // Reset the form after submission
        setFormData({
            productName: '',
            category: '',
            imageUrl: '',
            newPrice: '',
            oldPrice: '',
            tags: [],
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleTagChange = (e) => {
        const selectedTags = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData((prevData) => ({
            ...prevData,
            tags: selectedTags,
        }));
    };

    return (
        <div className={`page ${classes['home-page']}`}>
            <h1>Home Page</h1>
            <form className={classes['product-form']} onSubmit={(e) => e.preventDefault()}>
                <div className={classes['form-group']}>
                    <label className={classes['form-label']}>Product Name:</label>
                    <input
                        type="text"
                        name="productName"
                        className={classes['form-input']}
                        value={formData.productName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={classes['form-group']}>
                    <label className={classes['form-label']}>Category:</label>
                    <input
                        type="text"
                        name="category"
                        className={classes['form-input']}
                        value={formData.category}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={classes['form-group']}>
                    <label className={classes['form-label']}>Image URL:</label>
                    <input
                        type="text"
                        name="imageUrl"
                        className={classes['form-input']}
                        value={formData.imageUrl}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={classes['form-group']}>
                    <label className={classes['form-label']}>New Price:</label>
                    <input
                        type="text"
                        name="newPrice"
                        className={classes['form-input']}
                        value={formData.newPrice}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={classes['form-group']}>
                    <label className={classes['form-label']}>Old Price:</label>
                    <input
                        type="text"
                        name="oldPrice"
                        className={classes['form-input']}
                        value={formData.oldPrice}
                        onChange={handleInputChange}
                    />
                </div>

                <div className={classes['form-group']}>
                    <label className={classes['form-label']}>Tags:</label>
                    <select
                        name="tags"
                        multiple
                        className={classes['form-dropdown']}
                        value={formData.tags}
                        onChange={handleTagChange}
                    >
                        <option value="tag1">Tag 1</option>
                        <option value="tag2">Tag 2</option>
                        <option value="tag3">Tag 3</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className={classes['form-button']}
                    onClick={handleAddProduct}
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default HomePage;
