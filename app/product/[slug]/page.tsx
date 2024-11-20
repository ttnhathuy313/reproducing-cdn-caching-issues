import ProductDetails from './_PageSections/_products';

const ProductPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params;
    return (
        <div>
            <h1>This is product {slug}</h1>
            <ProductDetails />
        </div>
    );
};

export async function generateStaticParams() {
    return ['one', 'two', 'three'].map(slug => ({ slug }));
}

export default ProductPage;