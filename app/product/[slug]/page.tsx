import ProductDetails from './_PageSections/_products';

type Props = {
    slug: string;
};

const ProductPage = ({ slug }: Props) => {
    return (
        <div>
            <h1>This is product {slug}</h1>
            <ProductDetails />
        </div>
    );
};

export const generateStaticParams = async () => {
    const paths = ['one', 'two', 'three'].map(slug => ({
        slug,
    }));

    return paths;
};

export default ProductPage;