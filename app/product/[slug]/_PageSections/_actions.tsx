'use server'

export const fetchProduct = async (seed: string) => {
    const response = await fetch(`https://fakerapi.it/api/v2/products?_quantity=1&_seed=${seed}`);
    if (!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return response.json();
};
