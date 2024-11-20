'use client';

import React, { useState } from 'react';
import { fetchProduct } from './_actions';

const ProductDetails: React.FC = () => {
    const [product, setProduct] = useState<{ title: string; net_price: number } | null>(null);

    const fetchProductDetails = async () => {
        const currentTime = new Date().getTime();
        const seed = currentTime % 5;
        const data = await fetchProduct(seed.toString());
        if (data.status === 'OK' && data.data.length > 0) {
            const productData = data.data[0];
            setProduct({ title: productData.name, net_price: productData.net_price });
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
        </div>
    );
};

export default ProductDetails;