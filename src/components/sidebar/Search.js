import React, { useState, useEffect, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Form } from 'react-bootstrap';

import ProductsContext from '../../context/products/productsContext';

const Search = ({ history, match }) => {

    const productsContext = useContext(ProductsContext);
    const [text, setText] = useState('');

    // add representing in search if there is param in url
    useEffect(() => {
        if (match.params.term)
            setText(match.params.term);
        // eslint-disable-next-line
    }, []);

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (text !== '') {
            history.push(`/products/${productsContext.category}/${text}`);
            productsContext.searchProducts(undefined,text);
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

export default withRouter(Search);
