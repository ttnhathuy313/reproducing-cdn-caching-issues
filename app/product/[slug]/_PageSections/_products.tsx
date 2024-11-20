'use client';

import React, { useState, useEffect } from 'react';
import { fetchProduct } from './_actions';

const ProductDetails: React.FC = () => {
    const [product, setProduct] = useState<{ title: string; net_price: number } | null>(null);
    const [recentlyViewed, setRecentlyViewed] = useState<{ title: string; net_price: number }[]>([]);

    useEffect(() => {
        const storedProducts = localStorage.getItem('recentlyViewed');
        if (storedProducts) {
            setRecentlyViewed(JSON.parse(storedProducts));
        }
    }, []);

    const fetchProductDetails = async () => {
        const currentTime = new Date().getTime();
        const seed = currentTime % 5;
        const data = await fetchProduct(seed.toString());
        if (data.status === 'OK' && data.data.length > 0) {
            const productData = data.data[0];
            const newProduct = { title: productData.name, net_price: productData.net_price };
            setProduct(newProduct);

            // Update recently viewed items in localStorage
            const updatedRecentlyViewed = [newProduct, ...recentlyViewed].slice(0, 5); // Keep only the last 5 items
            localStorage.setItem('recentlyViewed', JSON.stringify(updatedRecentlyViewed));
            setRecentlyViewed(updatedRecentlyViewed);
        }
    };

    return (
        <div>
            <button onClick={fetchProductDetails}>Show product details</button>
            {product && (
                <div>
                    <h2>{product.title}</h2>
                    <p>Price: ${product.net_price.toFixed(2)}</p>
                </div>
            )}
            <div>
                <h3>Recently Viewed Items</h3>
                {recentlyViewed.map((item, index) => (
                    <div key={index}>
                        <h4>{item.title}</h4>
                        <p>Price: ${item.net_price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDetails;