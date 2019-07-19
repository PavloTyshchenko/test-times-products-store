import React, { useState, useContext } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

const Search = () => {

    const productsContext = useContext(ProductsContext);

    const [text, setText] = useState('');

    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if (text !== '') {
            productsContext.searchProducts(text);
            setText('');
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Row>
                <Col xs={9}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            onChange={onChange}
                            value={text}
                            placeholder="Search Products..." />
                    </Form.Group>
                </Col>
                <Col>
                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                    {
                        productsContext.searched.length > 0 &&
                        <Button variant="secondary"
                            onClick={productsContext.clearProducts}>
                            Clear
                        </Button>
                    }
                </Col>
            </Row>
        </Form>
    );
};

export default Search;
