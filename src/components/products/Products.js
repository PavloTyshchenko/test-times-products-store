import React, { useEffect, useContext } from 'react';
import { CardColumns, Alert, Container } from 'react-bootstrap';

import ProductItem from './ProductItem';
import Spinner from '../spinner/Spinner';

import ProductsContext from '../../context/products/productsContext';

const Products = () => {
    const productsContext = useContext(ProductsContext);

    const { products, loading, getProducts } = productsContext;

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return (
            <Container className="text-center">
                <Spinner />
            </Container>

        );
    }


    if (!loading && products.length === 0) {
        return (
            <Alert variant='secondary'>
                Unfortunately no matches ...
            </Alert>
        );
    };

    return (
        <CardColumns className="mb-3">
            {
                products.map((product) => {
                    return <ProductItem key={product.name} product={product} />
                })
            }
        </CardColumns>
    );
};

export default Products;
