// AdminPage.jsx

import React, { useRef } from 'react';
import styles from './HomePage.module.css';
import Resizer from 'react-image-file-resizer';
import { toast } from 'react-toastify';
import axios from 'axios';

const AdminPage = () => {
    const productNameRef = useRef(null);
    const categoryRef = useRef(null);
    const originalPriceRef = useRef(null);
    const discountedPriceRef = useRef(null);
    const mainImageRef = useRef(null);
    const sideImagesRef = useRef(null);
    const tagsRef = useRef(null);
    const resizeImage = (file, maxWidth, maxHeight) => {
        return new Promise((resolve, reject) => {
            Resizer.imageFileResizer(
                file,
                maxWidth,
                maxHeight,
                'JPEG',
                50,
                0,
                (uri) => {
                    resolve(uri);
                },
                'base64'
            );
        });
    };

    // ... (other code)

    const handleMainImageChange = async (e) => {
        const file = e.target.files[0];
        const resizedImage = await resizeImage(file, 800, 600);
        mainImageRef.current = resizedImage;
    };

    const handleSideImageChange = async (e) => {
        const files = e.target.files;
        const resizedImages = await Promise.all(Array.from(files).map(file => resizeImage(file, 400, 300)));
        sideImagesRef.current = resizedImages;
    };


    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!productNameRef.current.value || !categoryRef.current.value || !originalPriceRef.current.value || !discountedPriceRef.current.value) {
            alert("Please fill in all the required fields.");
            return;
        }


        const productName = productNameRef.current.value;
        const category = categoryRef.current.value;
        const originalPrice = originalPriceRef.current.value;
        const discountedPrice = discountedPriceRef.current.value;
        const mainImage = mainImageRef.current;
        const sideImages = sideImagesRef.current;
        const tags = tagsRef.current.value;

        const tagsArray = tags.split(',').map(tag => tag.trim());

        try {
            const productData = {
                name: productName,
                category: category,
                originalPrice: originalPrice,
                discountedPrice: discountedPrice,
                mainImage: mainImage,
                sideImages: sideImages,
                tags: tagsArray
            }
            const response = await axios.post('http://localhost:8080/admin/add-product', productData);
            if (response.status === 201) {
                toast.success('Product added successfully');
                e.target.reset();
            }
            // 
        } catch (error) {
            if (error.response.status === 413) {
                toast.warn('Size limit exceeded');
            }
            else if (error.response.status === 400) {
                toast.warn('Missing Data');
            }
            console.log(error);
        }
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
                        ref={mainImageRef}
                    />
                </label>

                <label className={styles.label}>
                    Side Images (up to 5):
                    <input
                        type="file"
                        className={`${styles.inputField} ${styles.fileInput}`}
                        multiple
                        onChange={handleSideImageChange}
                        ref={sideImagesRef}
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
