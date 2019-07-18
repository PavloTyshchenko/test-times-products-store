import React, { useEffect, useContext } from 'react';
import ProductItem from './ProductItem';
import ProductsContext from '../../context/products/productsContext';

const Products = () => {
    const productsContext = useContext(ProductsContext);

    const { products, searched, getProducts } = productsContext;

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    console.log(searched);
    if (searched.length === 0) {
        return (
            <ul className="list img-list">
                {
                    products.map((product) => {
                        return <ProductItem key={product.name} product={product} />
                    })
                }
            </ul>
        );
    } else {
        return (
            <ul className="list img-list">
                {
                    searched.map((product) => {
                        return <ProductItem key={product.name} product={product} />
                    })
                }
            </ul>
        );
    }
};

export default Products;
