import React, { useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

import Sidebar from '../../components/sidebar/Sidebar';
import Products from '../../components/products/Products';

 // > ProductsPage
    //      col                 col
    //      > Sidebar           > Products
    //      = Search
    //      = Categories
    //      = ClearButton

const ProductsPage = ({ match }) => {

    const productsContext = useContext(ProductsContext);
    const { getProducts, getCategories, searchProducts } = productsContext;

    const { category, term } = match.params;

    useEffect(() => {
        // fetching all categories to represent list
        getCategories();
        
        if (category && !term) {
            searchProducts(category, undefined)
        };

        if (category && term) {
            searchProducts(category, term);
        };

        if (!category && !term) {
            getProducts();
        };

        // eslint-disable-next-line
    }, []);

    return (
            <Row>
                <Col md={3}>
                    <Sidebar />
                </Col>

                <Col  md={9} >
                    <Products />
                </Col>
            </Row>
    );
};

export default withRouter(ProductsPage);
