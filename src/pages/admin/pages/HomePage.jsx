// AdminPage.jsx

import React, { useRef } from 'react';
import styles from './HomePage.module.css';

const AdminPage = () => {
    const productNameRef = useRef(null);
    const categoryRef = useRef(null);
    const originalPriceRef = useRef(null);
    const discountedPriceRef = useRef(null);
    const mainImageRef = useRef(null);
    const sideImagesRef = useRef(null);
    const tagsRef = useRef(null);

    const handleMainImageChange = (e) => {
        const file = e.target.files[0];
        mainImageRef.current = file;
    };

    const handleSideImageChange = (e) => {
        const files = e.target.files;
        sideImagesRef.current = [...files];
    };

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (!productNameRef.current.value || !categoryRef.current.value || !originalPriceRef.current.value || !discountedPriceRef.current.value || !mainImageRef.current || !sideImagesRef.current || !tagsRef.current.value) {
            alert("Please fill in all the required fields.");
            return;
        }
        // Get values from refs
        const productName = productNameRef.current.value;
        const category = categoryRef.current.value;
        const originalPrice = originalPriceRef.current.value;
        const discountedPrice = discountedPriceRef.current.value;
        const mainImage = mainImageRef.current;
        const sideImages = sideImagesRef.current;
        const tags = tagsRef.current.value;

        // Split the tags by a comma and trim extra spaces
        const tagsArray = tags.split(',').map(tag => tag.trim());

        // Add product logic goes here
        // You can use the values and tagsArray to send the data to the server
        console.log('Product Data:', {
            productName,
            category,
            originalPrice,
            discountedPrice,
            mainImage,
            sideImages,
            tags: tagsArray
        });
        productNameRef.current.value = '';
        categoryRef.current.value = 'default';
        originalPriceRef.current.value = '';
        discountedPriceRef.current.value = '';
        mainImageRef.current.value = null;
        sideImagesRef.current.value = null;
        tagsRef.current.value = '';
    };

    return (
        <div className={styles.container}>
            <h1>Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <label className={styles.label}>
                    Product Name:
                    <input
                        type="text"
                        className={styles.inputField}
                        ref={productNameRef}
                    />
                </label>

                <label className={styles.label}>
                    Category:
                    <select
                        className={styles.inputField}
                        ref={categoryRef}
                        defaultValue={'default'}
                    >
                        <option value="default" disabled>Select a category</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kids">Kids</option>
                    </select>
                </label>



                <label className={styles.label}>
                    Original Price:
                    <input
                        type="number"
                        className={styles.inputField}
                        ref={originalPriceRef}
                    />
                </label>

                <label className={styles.label}>
                    Discounted Price:
                    <input
                        type="number"
                        className={styles.inputField}
                        ref={discountedPriceRef}
                    />
                </label>

                <label className={styles.label}>
                    Main Image:
                    <input
                        type="file"
                        className={`${styles.inputField} ${styles.fileInput}`}
                        onChange={handleMainImageChange}
                    />
                </label>

                <label className={styles.label}>
                    Side Images (up to 5):
                    <input
                        type="file"
                        className={`${styles.inputField} ${styles.fileInput}`}
                        multiple
                        onChange={handleSideImageChange}
                    />
                </label>

                <label className={styles.label}>
                    Tags:
                    <input
                        type="text"
                        className={styles.inputField}
                        ref={tagsRef}
                    />
                    <small>Enter multiple tags separated by commas (e.g., tag1, tag2, tag3)</small>
                </label>

                <button type="submit" className={styles.button}>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AdminPage;
