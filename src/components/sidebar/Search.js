import React, { useState, useContext } from 'react'
import { Row, Col, Form } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

const Search = () => {

    const productsContext = useContext(ProductsContext);

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text !== '') {
            productsContext.searchProducts(text);
            setText('');
        }
    };

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control
                    type="text"
                    onChange={onChange}
                    value={text}
                    placeholder="Search Products..." />
            </Form.Group>
        </Form>
    );
};

export default Search;
