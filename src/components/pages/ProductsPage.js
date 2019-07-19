import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Sidebar from '../../components/sidebar/Sidebar';
import Products from '../../components/products/Products';

const ProductsPage = props => {
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


export default ProductsPage;
